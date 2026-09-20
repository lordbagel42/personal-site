import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

// Run with `node scripts/generate-social-card.mjs`; requires rsvg-convert and
// woff2_decompress. No network requests are needed to reproduce the card.
// Uses the same self-hosted fonts and layered composition as the landing page.
// The printer is Raygen's original, unmodified SERV0 assembly render.
const root = fileURLToPath(new URL('../', import.meta.url));
const [display, body, printer] = await Promise.all([
	readFile(join(root, 'static/fonts/archivo.woff2')),
	readFile(join(root, 'static/fonts/manrope.woff2')),
	readFile(join(root, 'static/projects/serv0.png'))
]);
const origin =
	"Origin: composed by scripts/generate-social-card.mjs in the approved concept 26 visual style, with Raygen Rupe's unmodified SERV0 assembly render, sourced from https://raw.githubusercontent.com/lordbagel42/Serv0/main/Images/Serv0.png. Archivo and Manrope are the self-hosted Google Fonts in static/fonts. See static/projects/SOURCES.md for attribution and the source render's CC BY-NC-SA 4.0 license.";

// Keep Impeccable-compatible provenance on every regeneration without depending
// on a machine-specific CLI installation. The pixels are left untouched.
async function embedProvenance(path) {
	const png = await readFile(path);
	const payload = Buffer.from(`impeccable:prompt\0${origin}`, 'latin1');
	const chunk = Buffer.alloc(payload.length + 12);
	chunk.writeUInt32BE(payload.length, 0);
	chunk.write('tEXt', 4);
	payload.copy(chunk, 8);
	let crc = 0xffffffff;
	for (const byte of chunk.subarray(4, -4)) {
		crc ^= byte;
		for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
	}
	chunk.writeUInt32BE((crc ^ 0xffffffff) >>> 0, chunk.length - 4);
	await writeFile(path, Buffer.concat([png.subarray(0, -12), chunk, png.subarray(-12)]));
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title description">
<title id="title">Raygen Rupe — Engineer. Student. Maker.</title>
<desc id="description">Oversized cream and lilac lettering frames Raygen Rupe's SERV0 3D printer on a dark aubergine background.</desc>
<metadata>${origin}</metadata>
<defs>
<style>
@font-face{font-family:Archivo;src:url(data:font/woff2;base64,${display.toString('base64')}) format('woff2');font-weight:100 900;}
@font-face{font-family:Manrope;src:url(data:font/woff2;base64,${body.toString('base64')}) format('woff2');font-weight:400 800;}
.display{font-family:Archivo,sans-serif;font-weight:850;letter-spacing:-9px;}
.body{font-family:Manrope,sans-serif;}
</style>
</defs>
<rect width="1200" height="630" fill="#140f19"/>
<text class="body" x="42" y="56" font-size="20" font-weight="500" fill="#f0ecdf">Engineer. Student. Maker.</text>
<text class="display" x="27" y="274" font-size="250" fill="#f0ecdf">RAYGEN</text>
<image x="655" y="135" width="470" height="608" transform="rotate(-7 890 439)" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${printer.toString('base64')}"/>
<text class="display" x="28" y="517" font-size="276" fill="#c6addc">RUPE</text>
<text class="body" x="42" y="592" font-size="20" font-weight="500" fill="#c5baca">A hand in the making.</text>
<text class="body" x="1158" y="592" text-anchor="end" font-size="20" font-weight="600" fill="#f0ecdf">raygen.dev</text>
</svg>`;

await writeFile(join(root, 'static/social-card.svg'), svg);
const temporary = await mkdtemp(join(tmpdir(), 'raygen-social-card-'));
try {
	await Promise.all([
		writeFile(join(temporary, 'archivo.woff2'), display),
		writeFile(join(temporary, 'manrope.woff2'), body)
	]);
	// Fontconfig can inspect WOFF2, but Pango needs decompressed OpenType data.
	for (const name of ['archivo', 'manrope']) {
		const decompress = spawnSync('woff2_decompress', [join(temporary, `${name}.woff2`)], {
			encoding: 'utf8'
		});
		if (decompress.error) throw decompress.error;
		if (decompress.status !== 0) {
			throw new Error(decompress.stderr || `Unable to decompress ${name}`);
		}
		await rm(join(temporary, `${name}.woff2`));
	}
	const config = join(temporary, 'fonts.conf');
	await writeFile(
		config,
		`<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${temporary}</dir><cachedir>${temporary}/cache</cachedir><alias><family>Archivo</family><prefer><family>Archivo SemiBold</family></prefer></alias><alias><family>Manrope</family><prefer><family>Manrope ExtraLight</family></prefer></alias></fontconfig>`
	);
	const render = spawnSync(
		'rsvg-convert',
		[
			'--width',
			'1200',
			'--height',
			'630',
			'--output',
			join(root, 'static/social-card.png'),
			join(root, 'static/social-card.svg')
		],
		{ env: { ...process.env, FONTCONFIG_FILE: config }, encoding: 'utf8' }
	);
	if (render.error) throw render.error;
	if (render.status !== 0) throw new Error(render.stderr || 'Social card rendering failed');
	await embedProvenance(join(root, 'static/social-card.png'));
	console.log('Created static/social-card.svg and static/social-card.png (1200 × 630).');
} finally {
	await rm(temporary, { recursive: true, force: true });
}

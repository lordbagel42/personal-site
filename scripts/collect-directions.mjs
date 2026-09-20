import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const folder = fileURLToPath(new URL('../static/directions/', import.meta.url));
const rounds = [{ count: 25 }, { count: 15 }];
const total = rounds.reduce((count, round) => count + round.count, 0);
const concepts = await Promise.all(
	Array.from({ length: total }, async (_, index) => {
		const id = String(index + 1).padStart(2, '0');
		const round = index < rounds[0].count ? 1 : 2;
		try {
			const concept = JSON.parse(await readFile(`${folder}${id}.json`, 'utf8'));
			await access(`${folder}${id}.html`);
			if (!concept || typeof concept !== 'object' || Array.isArray(concept))
				throw new Error(`${id}: metadata must be an object`);
			if (concept.id !== id) throw new Error(`${id}: metadata id must be "${id}"`);
			for (const field of ['name', 'thesis', 'interaction', 'why']) {
				if (typeof concept[field] !== 'string' || !concept[field].trim())
					throw new Error(`${id}: missing ${field}`);
			}
			return {
				id,
				round,
				name: concept.name.trim(),
				thesis: concept.thesis.trim(),
				interaction: concept.interaction.trim(),
				why: concept.why.trim(),
				ready: true
			};
		} catch (error) {
			if (error.code && error.code !== 'ENOENT') throw error;
			if (!error.code) console.error(error.message);
			return {
				id,
				round,
				name: `Direction ${id}`,
				thesis: '',
				interaction: '',
				why: '',
				ready: false
			};
		}
	})
);
await writeFile(`${folder}catalog.json`, `${JSON.stringify({ concepts }, null, 2)}\n`);
console.log(`${concepts.filter((concept) => concept.ready).length}/${total} concepts ready`);

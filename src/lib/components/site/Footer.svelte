<script lang="ts">
	import { resolve } from '$app/paths';
	import { profile } from '$lib/portfolio';
</script>

<footer class="site-footer">
	<div class="footer-person">
		<a href="https://hackclub.com" aria-label="Hack Club"
			><img src="/brand/hack-club-flag-standalone.svg" width="82" alt="" loading="lazy" /></a
		>
		<span>Made by Raygen Rupe.<br />Always something in progress.</span>
	</div>
	<div class="webring">
		<a href="https://anicetus.dev/webring">
			<img
				src="https://anicetus.dev/webring/img.png"
				alt="Hardware nerds webring"
				width="150"
				loading="lazy"
			/>
		</a>
		<nav aria-label="Hardware nerds webring">
			<a href="https://anicetus.dev/webring?action=previous">previous</a>
			<a href="https://anicetus.dev/webring?action=random">random</a>
			<a href="https://anicetus.dev/webring?action=next">next</a>
		</nav>
	</div>
	<nav aria-label="Footer navigation">
		<a href={resolve('/blog')}>Writing</a>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- public external profile URL -->
		<a href={profile.github}>GitHub</a>
		<a href="#page-top">Back to the top</a>
	</nav>
</footer>

<style>
	.site-footer {
		padding: 45px var(--pad) 25px;
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
	}
	.footer-person {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.footer-person img {
		display: block;
		width: 82px;
		height: auto;
	}
	a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		text-decoration: none;
	}
	a:hover {
		color: var(--lilac);
		text-decoration: underline;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 30px;
	}
	.webring {
		width: 150px;
	}
	.webring > a {
		display: block;
	}
	.webring img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: center;
	}
	.webring nav {
		gap: 0;
		justify-content: space-around;
	}
	@media (max-width: 720px) {
		.site-footer {
			padding-top: 39px;
			align-items: start;
		}
		.footer-person {
			gap: 12px;
			max-width: 190px;
		}
		.footer-person img {
			width: 50px;
		}
		.site-footer > nav {
			gap: 17px;
			flex-wrap: wrap;
			justify-content: end;
		}
	}
	@media (max-width: 440px) {
		.site-footer {
			flex-wrap: wrap;
			gap: 22px;
		}
		.footer-person {
			max-width: none;
		}
		.site-footer > nav {
			justify-content: start;
		}
	}
</style>

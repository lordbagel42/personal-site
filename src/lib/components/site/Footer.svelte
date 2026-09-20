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
		nav {
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
		nav {
			justify-content: start;
		}
	}
</style>

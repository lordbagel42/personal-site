<script lang="ts">
	import Logo from './logo.svelte';
	import Search from './search.svelte';
	import Socials from './socials.svelte';
	import Menu from './menu.svelte';

	let scrollY = $state(0);
	let fixed = $derived(scrollY > 0);

	const headerHeight = 64;
</script>

<svelte:window bind:scrollY />

<header
	class="fixed top-0 right-0 left-0 z-20 border-b bg-background/80 p-4 backdrop-blur-md transition-all duration-300 ease-in-out"
	class:shadow-sm={fixed}
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<div class="flex items-center gap-8">
			<Logo />
			<div class="hidden md:block">
				<Menu />
			</div>
		</div>
		<div class="flex items-center gap-4">
			<Search />
			<div class="hidden sm:block">
				<Socials />
			</div>
		</div>
	</div>
</header>

<div style="height: {headerHeight}px;"></div>

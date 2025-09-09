<script lang="ts">
	import Logo from './logo.svelte';
	import Search from './search.svelte';
	import Socials from './socials.svelte';
	import Menu from './menu.svelte';

	let scrollY = $state(0);
	let fixed = $derived(scrollY > 0);

	const headerHeight = 64; // Adjust to match your header's actual height in px
</script>

<svelte:window bind:scrollY />

<header
	class="fixed top-0 right-0 left-0 z-20 border-2 bg-transparent p-4 text-[18px] text-current transition-all duration-300 ease-in-out"
	class:top-2={fixed}
	class:text-blue-600={fixed}
	class:shadow-lg={fixed}
	class:backdrop-blur-[20px]={fixed}
	class:rounded-xl={fixed}
	style="
    width: {fixed ? '20%' : '100%'};
    left: {fixed ? '50%' : '0'};
    transform: {fixed ? 'translateX(-50%)' : 'translateX(0)'};
  "
>
	<div class="flex w-full items-center justify-between px-4">
		<div class="flex items-center gap-2">
			<a href="/">sylviethedev</a>
		</div>
		<Search />
	</div>
</header>

<!-- Spacer to prevent content from being overlapped -->
<div style="height: {headerHeight}px;"></div>

<main>
	<!-- Your page content goes here -->
</main>

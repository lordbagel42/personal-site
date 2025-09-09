<script lang="ts">
	import * as Command from '$lib/components/ui/command/index.js';
	import { browser } from '$app/environment';

	const platform = browser && window.navigator.platform;

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k') {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<button
	onclick={() => (open = !open)}
	class="flex items-center gap-2 rounded-xl border-t border-l border-gray-800 bg-secondary px-4 py-2 text-gray-300 transition-colors hover:text-blue-500"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<title>Search</title>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.3-4.3" />
	</svg>
	<span class="hidden sm:inline">Search</span>
	<div class="hidden gap-1 sm:flex">
		<kbd class="rounded-sm border border-gray-300 bg-gray-200 px-1 py-0.5 text-gray-700">
			{platform === 'MacIntel' ? '⌘' : 'Ctrl'}
		</kbd>
		<span>+</span>
		<kbd class="rounded-sm border border-gray-300 bg-gray-200 px-1 py-0.5 text-gray-700">K</kbd>
	</div>
</button>

<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item>Calendar</Command.Item>
			<Command.Item>Search Emoji</Command.Item>
			<Command.Item>Calculator</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="Settings">
			<Command.Item>Profile</Command.Item>
			<Command.Item>Billing</Command.Item>
			<Command.Item>Settings</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>

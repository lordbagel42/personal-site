<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav class="flex items-center gap-6">
	<a href={resolve('/')} class="text-sm font-medium transition-colors hover:text-primary"> Home </a>
	<a href={resolve('/blog')} class="text-sm font-medium transition-colors hover:text-primary">
		Blog
	</a>
</nav>

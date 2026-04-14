<script lang="ts">
	import * as config from '$lib/config';
	import { resolve } from '$app/paths';
</script>

<a
	href={resolve('/')}
	class="text-xl font-bold tracking-tight transition-colors hover:text-primary"
>
	{config.title}
</a>

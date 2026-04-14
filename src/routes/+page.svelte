<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { ArrowRight, Terminal, Code2, Cpu } from 'lucide-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title} | Skilled Programmer</title>
	<meta name="description" content={config.description} />
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="relative overflow-hidden bg-background py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<div class="mb-8 flex justify-center">
					<div
						class="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border transition-all hover:ring-foreground/20"
					>
						Available for interesting projects. <a
							href="mailto:hello@example.com"
							class="font-semibold text-primary"
							><span class="absolute inset-0" aria-hidden="true"></span>Contact me
							<span aria-hidden="true">&rarr;</span></a
						>
					</div>
				</div>
				<h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
					{config.title}
				</h1>
				<p class="mt-6 text-lg leading-8 text-muted-foreground">
					{config.description}. Exploring the intersection of performance, design, and developer
					experience.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/blog"
						class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					>
						Read the blog
					</a>
					<a
						href="https://github.com"
						class="text-sm leading-6 font-semibold text-foreground transition-colors hover:text-primary"
					>
						View projects <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
		<!-- Abstract background element -->
		<div class="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
			<div
				class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
	</section>

	<!-- Skills/Philosophy Section -->
	<section class="bg-muted/30 py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base leading-7 font-semibold text-primary">Philosophy</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					Everything you need, nothing you don't
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-foreground">
							<Terminal class="h-5 w-5 flex-none text-primary" />
							Performance First
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
							<p class="flex-auto">
								Code should be efficient by default. Minimal bundles, fast execution, and zero bloat
								are not optional features.
							</p>
						</dd>
					</div>
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-foreground">
							<Code2 class="h-5 w-5 flex-none text-primary" />
							Type Safety
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
							<p class="flex-auto">
								Strong types are the foundation of reliable software. Leveraging TypeScript to catch
								errors before they reach production.
							</p>
						</dd>
					</div>
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-foreground">
							<Cpu class="h-5 w-5 flex-none text-primary" />
							Modern Stack
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
							<p class="flex-auto">
								Building with SvelteKit, Tailwind, and Cloudflare. Tools that empower developers to
								build better software faster.
							</p>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</section>

	<!-- Latest Posts Section -->
	<section class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					Latest from the blog
				</h2>
				<p class="mt-2 text-lg leading-8 text-muted-foreground">
					Stay up to date with my latest thoughts and discoveries.
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#each data.posts as post}
					<article
						class="group flex flex-col items-start justify-between rounded-2xl border border-border p-6 transition-all hover:bg-muted/20"
					>
						<div class="flex items-center gap-x-4 text-xs">
							<time datetime={post.date} class="text-muted-foreground">
								{formatDate(post.date)}
							</time>
							{#each post.categories as category}
								<Badge
									variant="outline"
									class="transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
								>
									{category}
								</Badge>
							{/each}
						</div>
						<div class="group relative">
							<h3
								class="mt-3 text-lg leading-6 font-semibold text-foreground transition-colors group-hover:text-primary"
							>
								<a href="/blog/posts/{post.slug}">
									<span class="absolute inset-0"></span>
									{post.title}
								</a>
							</h3>
							<p class="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
								{post.description}
							</p>
						</div>
						<div class="mt-8 flex items-center gap-x-4">
							<div class="text-sm leading-6">
								<p class="font-semibold text-foreground">
									<a href="/blog/posts/{post.slug}" class="group/link flex items-center gap-1">
										Read more <ArrowRight
											class="size-4 transition-transform group-hover/link:translate-x-1"
										/>
									</a>
								</p>
							</div>
						</div>
					</article>
				{/each}
			</div>
			<div class="mt-16 flex justify-center">
				<a
					href="/blog"
					class="text-sm leading-6 font-semibold text-foreground transition-colors hover:text-primary"
				>
					View all posts <span aria-hidden="true">→</span>
				</a>
			</div>
		</div>
	</section>
</main>

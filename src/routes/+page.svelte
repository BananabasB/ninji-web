<script lang="ts">
	import DownArrow from 'phosphor-icons-svelte/IconArrowDownBold.svelte';
	import { track } from '@vercel/analytics';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let shiftHeld = $state(false);

	function onDownload() {
		track('download');
	}

	function handleKey(e: KeyboardEvent) {
		shiftHeld = e.getModifierState('Shift');
	}
</script>

<svelte:window onkeydown={handleKey} onkeyup={handleKey} />
<main
	class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden md:flex-row md:justify-start"
>
	<div class="mx-4 mt-20 space-y-2 text-center md:mt-0 md:ml-20 md:text-left">
		<h1 class="font-display text-4xl font-extrabold">ninji</h1>
		<p>{data.flags.tagline}</p>
		<div class="mt-3.5 flex flex-row flex-wrap items-center justify-center gap-2 md:justify-start">
			<a
				href="/download"
				onclick={onDownload}
				class="flex flex-row items-center gap-1.5 rounded-2xl border-y border-y-neutral-600 bg-gradient-to-b from-neutral-700 via-neutral-950 to-neutral-950 p-3 py-1.5 font-medium text-white outline outline-black transition-all duration-75 hover:from-neutral-700 hover:to-neutral-900 active:translate-y-px"
			>
				<DownArrow class="size-4" />
				{data.flags.buttonLabel}
			</a>
			<a
				href={shiftHeld
					? 'https://github.com/BananabasB/ninji-web'
					: 'https://github.com/BananabasB/ninji'}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-1.5 rounded-2xl border-y border-y-white bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-200 p-3 py-1.5 text-black outline outline-neutral-300 transition-all duration-75 hover:from-neutral-50 hover:to-neutral-200 active:translate-y-px"
			>
				<svg role="img" viewBox="0 0 24 24" class="size-4" fill="currentColor"
					><path
						d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
					/></svg
				>
				{shiftHeld ? 'View website source' : data.flags.githubLabel}
			</a>
		</div>
	</div>
	<img
		src="/screenshot.png"
		alt="Ninji app screenshot"
		class="relative mt-8 h-auto w-4/5 max-w-md rounded-2xl object-contain md:absolute md:right-10 md:mt-0 md:h-[60vh] md:w-auto md:max-w-none"
	/>

	<img
		src="/block-art.svg"
		class="pointer-events-none absolute right-0 bottom-0 -z-10 h-24 md:right-10 md:h-40"
		alt=""
		style="image-rendering: crisp-edges"
	/>
</main>

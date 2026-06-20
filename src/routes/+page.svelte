
<script lang="ts">
	import DownArrow from 'phosphor-icons-svelte/IconArrowDownBold.svelte'
</script>
<main class="relative flex h-screen w-full items-center overflow-hidden">
	<div class="ml-20 space-y-2 text-left">
		<h1 class="font-display text-4xl font-extrabold">ninji</h1>
		<p>Ninji is a lightweight macOS desktop wrapper for Nintendo Music.</p>
		<div class="mt-3.5 flex flex-row gap-2">
			<a
				href="/download"
				class="rounded-2xl flex-row font-medium flex items-center gap-1.5 border-y border-y-neutral-600 bg-gradient-to-b from-white/[0.06] to-transparent bg-neutral-800 p-3 py-1.5 text-white outline outline-black transition-colors duration-75 hover:bg-neutral-850 active:translate-y-px"
				><DownArrow class="size-4" /> Download for Mac</a
			>
			<a
				href="https://github.com/BananabasB/ninji"
				class="inline-flex items-center gap-1.5 rounded-2xl border-y border-y-white bg-gradient-to-b from-black/[0.04] to-transparent bg-neutral-200 p-3 py-1.5 text-black outline outline-neutral-300 transition-colors duration-75 hover:bg-neutral-250 active:translate-y-px"
			>
				<svg role="img" viewBox="0 0 24 24" class="size-4" fill="currentColor"
					><path
						d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
					/></svg
				>
				View source
			</a>
		</div>
	</div>
	<img src="/screenshot.png" alt="Ninji app screenshot" class="absolute right-10 h-[60vh] w-auto rounded-2xl object-contain" />

	<img src="/block-art.svg" class="pointer-events-none absolute bottom-0 right-10 -z-10 h-40" alt="" style="image-rendering: crisp-edges" />
</main>

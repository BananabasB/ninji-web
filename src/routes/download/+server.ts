import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET(_event: RequestEvent) {
	const res = await fetch('https://api.github.com/repos/BananabasB/ninji/releases/latest');
	const release = await res.json() as { assets: { name: string; browser_download_url: string }[] };
	const dmg = release.assets.find((a) => a.name.endsWith('.dmg'));
	if (!dmg) throw redirect(302, 'https://github.com/BananabasB/ninji/releases/latest');
	throw redirect(302, dmg.browser_download_url);
}

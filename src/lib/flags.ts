import { flag } from '@vercel/flags/sveltekit';

function hash(id: string, key: string): number {
	let h = 0;
	const s = id + ':' + key;
	for (let i = 0; i < s.length; i++) {
		h = ((h << 5) - h) + s.charCodeAt(i);
		h |= 0;
	}
	return Math.abs(h);
}

function decide<T extends string>(key: string, variants: T[], defaultValue: T, description: string) {
	return flag<T>({
		key,
		defaultValue,
		description,
		options: variants as unknown as never,
		decide: (params) => {
			const vid = params.cookies.get('visitor-id');
			if (!vid) return defaultValue;
			return variants[hash(vid.value, key) % variants.length];
		}
	});
}

export const buttonLabel = decide(
	'button-label',
	['Download for Mac', 'Get it for Mac', 'Download Free'],
	'Download for Mac',
	'Download button label'
);

export const tagline = decide(
	'tagline',
	[
		'Ninji is a lightweight macOS desktop wrapper for Nintendo Music.',
		'A native macOS app for Nintendo Music — no browser needed.',
		'Listen to Nintendo Music on your Mac, the way it should be.'
	],
	'Ninji is a lightweight macOS desktop wrapper for Nintendo Music.',
	'Hero section tagline'
);

export const githubLabel = decide(
	'github-label',
	['View source', 'Star on GitHub'],
	'View source',
	'GitHub button label'
);

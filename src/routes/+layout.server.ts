import type { LayoutServerLoad } from './$types';
import { buttonLabel, tagline, githubLabel } from '$lib/flags';

export const load: LayoutServerLoad = async () => {
	const [btn, tag, gh] = await Promise.all([
		buttonLabel(),
		tagline(),
		githubLabel()
	]);

	return {
		flags: {
			buttonLabel: btn,
			tagline: tag,
			githubLabel: gh
		}
	};
};

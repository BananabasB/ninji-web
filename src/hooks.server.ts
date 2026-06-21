import { createHandle } from '@vercel/flags/sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import { env } from '$env/dynamic/private';
import type { Handle } from '@sveltejs/kit';
import * as flags from '$lib/flags';

const visitorHandle: Handle = async ({ event, resolve }) => {
	if (!event.cookies.get('visitor-id')) {
		event.cookies.set('visitor-id', crypto.randomUUID(), {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			sameSite: 'lax'
		});
	}
	return resolve(event);
};

const handleFlags = createHandle({
	secret: env.FLAGS_SECRET ?? 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
	flags: flags as never
});

export const handle = sequence(visitorHandle, handleFlags);

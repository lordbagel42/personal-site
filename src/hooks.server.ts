import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	// Only redirect if it's not the homepage and not a SvelteKit internal or static asset request
	if (pathname !== '/' && !pathname.startsWith('/_app/') && !pathname.includes('.')) {
		throw redirect(307, '/');
	}

	return await resolve(event);
};

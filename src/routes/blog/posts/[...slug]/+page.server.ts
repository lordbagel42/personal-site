import { error } from '@sveltejs/kit';
import { getPublishedPost } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const meta = getPublishedPost(params.slug);
	if (!meta) error(404, 'This piece has not been published, or the link has changed.');
	return { meta };
};

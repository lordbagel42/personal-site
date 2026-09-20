import { getPublishedPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ posts: getPublishedPosts() });

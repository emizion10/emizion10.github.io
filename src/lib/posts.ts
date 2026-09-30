import { getCollection } from 'astro:content';
import { isPublished, newestFirst } from './post-utils';

export async function getPosts(includeUnpublished = import.meta.env.DEV) {
  const now = new Date();
  const posts = await getCollection('blog', ({ data }) => includeUnpublished || isPublished(data, now));
  return newestFirst(posts);
}

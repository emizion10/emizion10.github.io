import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { profile } from '../data/profile';

export async function GET(context: APIContext) {
  const posts = await getPosts(false);
  return rss({
    title: `${profile.name} — Writing`,
    description: 'Notes on software, AI, and things I learn along the way.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en</language>',
  });
}

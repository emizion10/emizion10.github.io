/** Pure helpers shared by the archive, homepage, article routes and RSS. */
export type PostMetadata = { date: Date; draft: boolean };

export function isPublished(data: PostMetadata, now = new Date()): boolean {
  return !data.draft && data.date.getTime() <= now.getTime();
}

export function newestFirst<T extends { id: string; data: PostMetadata }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(date);
}

export function readingTime(body = ''): number {
  const prose = body.replace(/```[\s\S]*?```/g, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').trim();
  return Math.max(1, Math.ceil((prose.match(/\S+/g)?.length ?? 0) / 200));
}

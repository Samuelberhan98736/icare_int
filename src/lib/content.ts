import { getCollection, type CollectionEntry } from 'astro:content';

/** All sermons, newest first. */
export async function getSermons(): Promise<CollectionEntry<'sermons'>[]> {
  return (await getCollection('sermons')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** YouTube thumbnail URL, or undefined when a sermon has no video yet. */
export function youtubeThumbnail(youtubeId: string | undefined): string | undefined {
  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : undefined;
}

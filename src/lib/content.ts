import { getCollection, type CollectionEntry } from 'astro:content';
import { todayInAtlanta } from '@/lib/dates';

/** Upcoming events (today or later), soonest first. Past events are hidden automatically. */
export async function getUpcomingEvents(limit?: number): Promise<CollectionEntry<'events'>[]> {
  const today = todayInAtlanta().getTime();
  const events = (await getCollection('events'))
    .filter((event) => event.data.date.getTime() >= today)
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
  return limit ? events.slice(0, limit) : events;
}

/** All sermons, newest first. */
export async function getSermons(): Promise<CollectionEntry<'sermons'>[]> {
  return (await getCollection('sermons')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Ministries sorted by their `order` field. */
export async function getMinistries(): Promise<CollectionEntry<'ministries'>[]> {
  return (await getCollection('ministries')).sort((a, b) => a.data.order - b.data.order);
}

/** YouTube thumbnail URL, or undefined when a sermon has no video yet. */
export function youtubeThumbnail(youtubeId: string | undefined): string | undefined {
  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : undefined;
}

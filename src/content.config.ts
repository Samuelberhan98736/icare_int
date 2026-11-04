import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Dates are written date-only in frontmatter (YYYY-MM-DD) and parsed as UTC midnight.
// Always format them with timeZone: 'UTC' (see src/lib/dates.ts) so they don't shift a day.

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      time: z.string(), // e.g. "6:30 PM"
      location: z.string().default('Main Sanctuary'),
      summary: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

const sermons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sermons' }),
  schema: z.object({
    title: z.string(),
    speaker: z.string().default('Pastor Teddy'),
    date: z.coerce.date(),
    scripture: z.string().optional(),
    series: z.string().optional(),
    youtubeId: z.string().optional(), // the part after "watch?v=" in a YouTube URL
    summary: z.string().optional(),
  }),
});

const ministries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ministries' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      order: z.number(),
    }),
});

export const collections = { events, sermons, ministries };

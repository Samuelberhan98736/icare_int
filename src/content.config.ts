import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Dates are written date-only in frontmatter (YYYY-MM-DD) and parsed as UTC midnight.
// Always format them with timeZone: 'UTC' (see src/lib/dates.ts) so they don't shift a day.

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

export const collections = { sermons };

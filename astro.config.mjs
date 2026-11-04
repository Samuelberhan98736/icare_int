// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the church's real domain before launch (used for canonical URLs, OG tags, sitemap).
  site: 'https://icareinternational.org',
  output: 'static',
  integrations: [
    sitemap({
      // Keep utility pages out of the sitemap.
      filter: (page) => !page.includes('/contact/thanks') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

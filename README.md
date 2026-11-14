# ICare International — Church Website

The website for **ICare International**, an Ethiopian American church in Atlanta, Georgia, led by Pastor Teddy.

Built with [Astro](https://astro.build) (static output), TypeScript, and Tailwind CSS v4. There is no database and no server code. The site is plain HTML, CSS and a tiny bit of JavaScript, ready for Netlify.

## Getting started (PowerShell)

Requires Node.js 22.23.4 or newer.

```powershell
npm install        # first time only
npm run dev        # local dev server at http://localhost:4321
npm run check      # type-check (should report 0 errors)
npm run build      # production build into .\dist
npm run preview    # preview the production build locally
```

## Where things live

| What | Where |
| --- | --- |
| Church name, address, phone, email, service times, social links, giving URL, nav | `src/data/site.ts` |
| Colors and fonts (design tokens) | `src/styles/global.css` (`@theme` block) |
| Events | `src/content/events/*.md` |
| Sermons | `src/content/sermons/*.md` |
| Ministries | `src/content/ministries/*.md` |
| Photos | `src/assets/images/` (plus `public/og-default.jpg` for social sharing) |
| Pages | `src/pages/` |
| Reusable building blocks | `src/components/` |
| Domain used for SEO / sitemap | `site` in `astro.config.mjs` (keep in sync with `url` in `site.ts`) |

Every placeholder value is marked `TODO`. Search the project for `TODO` to find everything the church still needs to provide.

## How to add an event

1. Create a new file in `src/content/events/`. The file name becomes the URL, e.g. `easter-sunday.md` → `/events/easter-sunday`.
2. Paste this in and edit it:

   ```markdown
   ---
   title: Easter Sunday Celebration
   date: 2027-03-28          # YYYY-MM-DD only
   time: 10:00 AM
   location: Main Sanctuary  # optional; defaults to "Main Sanctuary"
   summary: One or two sentences shown on event cards.
   image: ../../assets/images/event-easter.jpg   # optional
   imageAlt: Describe the photo for screen readers  # optional
   ---

   Full description goes here. You can use **Markdown**: headings, lists, links.
   ```

3. If you use a photo, put it in `src/assets/images/` first.

Past events disappear from the site automatically. Because the site is static, "today" is the day the site was last built, so rebuild it at least weekly. On Netlify, set up a scheduled build hook to do this.

## How to add a sermon

1. Create a new file in `src/content/sermons/`, e.g. `walking-in-faith.md`.
2. Paste this in and edit it:

   ```markdown
   ---
   title: Walking in Faith
   date: 2027-01-10
   speaker: Pastor Teddy     # optional; defaults to "Pastor Teddy"
   scripture: Hebrews 11:1–6 # optional
   series: Faith             # optional
   youtubeId: dQw4w9WgXcQ    # optional; the part after "watch?v=" in the YouTube link
   summary: One sentence describing the message.  # optional
   ---

   Optional sermon notes in Markdown.
   ```

The newest sermon (by date) is featured automatically on the home page and the sermons page. Without a `youtubeId`, a placeholder image and a "video coming soon" note are shown. None of the sample sermons have a video yet.

## How to edit a ministry

Edit the files in `src/content/ministries/`. The `order` number controls the order on the home page and the Ministries page.

## Contact form

The form on `/contact` uses **Netlify Forms**. It works automatically once the site is deployed to Netlify: submissions appear in the Netlify dashboard under *Forms*, and you can turn on email notifications there. It includes a spam honeypot. After sending, visitors land on `/contact/thanks`.

To switch to another provider (e.g. Formspree), edit `src/components/ContactForm.astro`. The comment at the top explains what to change.

## Giving

The Give page only links out to the church's existing giving platform (`givingUrl` in `src/data/site.ts`). **This site never collects payment information.**

## Placeholder photos to replace

All photos are neutral placeholders labelled "PLACEHOLDER PHOTO". To replace one, save the real photo **with the same file name** in the same folder. Landscape photos should be at least the size listed. Update the matching `alt` text if the picture's subject changes.

| File | Size (px) | What the photo should show | Used on |
| --- | --- | --- | --- |
| `src/assets/images/hero-worship.jpg` | 2400×1600 | Congregation in worship | Home hero |
| `src/assets/images/pastor-teddy.jpg` | 1200×1500 (portrait) | Pastor Teddy | Home, About |
| `src/assets/images/our-story.jpg` | 1600×1200 | Church community, past & present | About, Ministries fallback |
| `src/assets/images/cta-community.jpg` | 2400×1200 | Congregation fellowship | Closing "We'd love to meet you" band |
| `src/assets/images/page-about.jpg` | 2400×1200 | Congregation in the sanctuary | About banner |
| `src/assets/images/page-visit.jpg` | 2400×1200 | Building exterior / greeters | Visit banner |
| `src/assets/images/page-ministries.jpg` | 2400×1200 | Ministries in action | Ministries banner |
| `src/assets/images/page-events.jpg` | 2400×1200 | A church event | Events banner |
| `src/assets/images/page-sermons.jpg` | 2400×1200 | Pastor preaching | Sermons banner |
| `src/assets/images/page-give.jpg` | 2400×1200 | Outreach / serving | Give banner |
| `src/assets/images/page-contact.jpg` | 2400×1200 | Welcome desk / greeters | Contact banner |
| `src/assets/images/ministry-children.jpg` | 1200×900 | Children's ministry | Home, Ministries |
| `src/assets/images/ministry-youth.jpg` | 1200×900 | Youth ministry | Home, Ministries |
| `src/assets/images/ministry-women.jpg` | 1200×900 | Women's ministry | Home, Ministries |
| `src/assets/images/ministry-men.jpg` | 1200×900 | Men's ministry | Home, Ministries |
| `src/assets/images/ministry-worship.jpg` | 1200×900 | Worship team & choir | Home, Ministries |
| `src/assets/images/ministry-prayer.jpg` | 1200×900 | Prayer ministry | Home, Ministries |
| `src/assets/images/leader-1.jpg` … `leader-5.jpg` | 800×1000 (portrait) | Leadership portraits | About → Leadership (names/roles in `src/pages/about.astro`) |
| `src/assets/images/event-thanksgiving.jpg` | 1600×1000 | Thanksgiving meal | Sample event |
| `src/assets/images/event-prayer-night.jpg` | 1600×1000 | Night of prayer | Sample event |
| `src/assets/images/event-christmas.jpg` | 1600×1000 | Christmas service | Sample event |
| `src/assets/images/sermon-placeholder.jpg` | 1280×720 | Generic sermon thumbnail (shown when a sermon has no YouTube video) | Sermons |
| `public/og-default.jpg` | 1200×630 | Image shown when the site is shared on social media | All pages |

Also still needed: the church logo (currently a text wordmark in `Header.astro`/`Footer.astro` and a simple `public/favicon.svg`).

> Images are kept in `src/assets/images/` rather than `public/images/` so Astro can automatically resize and compress them (responsive `srcset`, modern formats, lazy loading).

## Open questions for the church

- Real address, phone, email, service times, and mailing address for checks.
- Are services in Amharic, English, or both? Should the site become bilingual? (Fonts for Amharic script are already included; a later phase could add `/am/...` pages with Astro's i18n routing.)
- Logo files and any existing brand colors.
- Giving platform URL, YouTube channel, and social media handles.
- Statement of faith, mission/vision wording, history, Pastor Teddy's bio, and leadership names.
- Real photos (see the table above).

## Deploying (later)

`netlify.toml` is already set up: build command `npm run build`, publish folder `dist`. Before launch, update the domain in `astro.config.mjs` and `src/data/site.ts`.

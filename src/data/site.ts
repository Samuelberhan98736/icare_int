// Central site settings. Every placeholder is marked TODO so it is easy to find.

export interface ServiceTime {
  name: string;
  day: string;
  time: string;
  language?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

const address = {
  street: '5140 Memorial Dr.',
  city: 'Stone Mountain',
  region: 'GA',
  postalCode: '30083',
  country: 'US',
} as const;

const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`;

export const site = {
  name: 'ICare International',
  tagline: 'A home for every heart in Atlanta.', // TODO: confirm tagline with the church
  description:
    'ICare International is an Ethiopian American church in Atlanta, Georgia, led by Pastor Teddy. Join us on Sunday. You are welcome here.', // TODO: confirm description
  url: 'https://icareinternational.org', // TODO: real domain (keep in sync with astro.config.mjs)
  pastor: 'Pastor Teddy',
  address,
  fullAddress,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  phone: '(314) 688-6483',
  email: 'ayted94@gmail.com',
  serviceTimes: [
    // TODO: confirm service names, days, times, and languages
    { name: 'Sunday Worship', day: 'Sunday', time: '10:00 AM', language: 'Amharic & English' },
    { name: 'Bible Study', day: 'Sunday', time: '8:00 – 9:00 PM', language: 'Amharic' },
  ] satisfies readonly ServiceTime[],
  social: {
    youtube: 'https://www.youtube.com/@pastortheodrosbezabih3233',
    facebook: 'https://www.facebook.com/share/1D12y5gDMT/',
  },
  // The channel's "Uploads" playlist: its channel ID (UCbf80s3…) with UC swapped for UU.
  youtubeUploadsPlaylist: 'UUbf80s3OZSO0D0GI8j1b5Sw',
  navLinks: [
    { label: 'About', href: '/about' },
    { label: 'Visit', href: '/visit' },
    { label: 'Sermons', href: '/sermons' },
    { label: 'Events', href: '/events' },
    { label: 'Second Generation', href: '/second-generation' },
    { label: 'Contact', href: '/contact' },
  ] satisfies readonly NavLink[],
  visitLink: { label: 'Plan a Visit', href: '/visit' } satisfies NavLink,
} as const;

/** The main weekly service, used for short "Sundays at 10:00 AM" lines. */
export const mainService = site.serviceTimes[0];

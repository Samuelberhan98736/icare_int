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
  street: '1234 Placeholder Road', // TODO: real street address
  city: 'Atlanta', // TODO: confirm city
  region: 'GA',
  postalCode: '30300', // TODO: real ZIP code
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
  phone: '(404) 555-0123', // TODO: real phone number
  email: 'hello@icareinternational.org', // TODO: real email address
  serviceTimes: [
    // TODO: confirm service names, days, times, and languages
    { name: 'Sunday Worship', day: 'Sunday', time: '10:00 AM', language: 'Amharic & English' },
    { name: 'Bible Study', day: 'Wednesday', time: '7:00 PM', language: 'Amharic' },
    { name: 'Prayer Night', day: 'Friday', time: '7:00 PM' },
  ] satisfies readonly ServiceTime[],
  social: {
    youtube: 'https://www.youtube.com/@icareinternational', // TODO: real YouTube channel
    facebook: 'https://www.facebook.com/share/1D12y5gDMT/',
    instagram: 'https://www.instagram.com/icareinternational', // TODO: real Instagram handle
    tiktok: 'https://www.tiktok.com/@icareinternational', // TODO: real TikTok handle
  },
  givingUrl: 'https://example.com/give/icare-international', // TODO: link to the church's existing giving platform
  mailingAddress: 'ICare International, PO Box 0000, Atlanta, GA 30300', // TODO: real mailing address for checks
  navLinks: [
    { label: 'About', href: '/about' },
    { label: 'Visit', href: '/visit' },
    { label: 'Ministries', href: '/ministries' },
    { label: 'Events', href: '/events' },
    { label: 'Sermons', href: '/sermons' },
    { label: 'Contact', href: '/contact' },
  ] satisfies readonly NavLink[],
  giveLink: { label: 'Give', href: '/give' } satisfies NavLink,
  visitLink: { label: 'Plan a Visit', href: '/visit' } satisfies NavLink,
} as const;

/** The main weekly service, used for short "Sundays at 10:00 AM" lines. */
export const mainService = site.serviceTimes[0];

// Date helpers. Content dates are UTC midnight, so every formatter pins timeZone to UTC.

const CHURCH_TIME_ZONE = 'America/New_York';

export function formatDate(date: Date, options: Intl.DateTimeFormatOptions = {}): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    ...options,
  }).format(date);
}

/** Parts for the big calendar-style date block on event cards. */
export function dateParts(date: Date): { month: string; day: string; weekday: string } {
  return {
    month: formatDate(date, { month: 'short', day: undefined, year: undefined }),
    day: formatDate(date, { day: 'numeric', month: undefined, year: undefined }),
    weekday: formatDate(date, { weekday: 'long', day: undefined, month: undefined, year: undefined }),
  };
}

/** ISO date (YYYY-MM-DD) for <time datetime>. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Today's date in Atlanta, as a UTC-midnight Date, so it compares cleanly with
 * content dates. Note: the site is static, so "today" means build time.
 */
export function todayInAtlanta(): Date {
  const ymd = new Intl.DateTimeFormat('en-CA', { timeZone: CHURCH_TIME_ZONE }).format(new Date());
  return new Date(`${ymd}T00:00:00Z`);
}

/** Whole days since 1970-01-01 for today's date in Atlanta. Used to rotate daily content. */
export function dayNumberInAtlanta(now: Date = new Date()): number {
  const ymd = new Intl.DateTimeFormat('en-CA', { timeZone: CHURCH_TIME_ZONE }).format(now);
  return Math.floor(Date.parse(`${ymd}T00:00:00Z`) / 86_400_000);
}

/** Current weekday ("Sunday") and minutes since midnight, in Atlanta time. */
export function clockInAtlanta(now: Date = new Date()): { weekday: string; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: CHURCH_TIME_ZONE,
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? '';
  return { weekday: get('weekday'), minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

/** Parses "6:30 PM" / "10 AM" into 24-hour [hours, minutes]. Falls back to 10:00. */
function parseTime(time: string): [number, number] {
  const match = /(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i.exec(time);
  if (!match) return [10, 0];
  let hours = Number(match[1]);
  const minutes = Number(match[2] ?? 0);
  const meridiem = match[3]?.toLowerCase();
  if (meridiem === 'pm' && hours < 12) hours += 12;
  if (meridiem === 'am' && hours === 12) hours = 0;
  return [hours, minutes];
}

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Builds an "Add to Google Calendar" link. Times are sent as floating local
 * times with ctz set to Atlanta, so they show correctly for every visitor.
 */
export function googleCalendarUrl(event: {
  title: string;
  date: Date;
  time: string;
  location: string;
  details?: string;
  durationHours?: number;
}): string {
  const [hours, minutes] = parseTime(event.time);
  const ymd = isoDate(event.date).replaceAll('-', '');
  const start = new Date(Date.UTC(2000, 0, 1, hours, minutes));
  const end = new Date(start.getTime() + (event.durationHours ?? 2) * 60 * 60 * 1000);
  const stamp = (d: Date) => `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00`;
  // If the event runs past midnight, the end stamp would wrap; clamp to 23:59 for simplicity.
  const endStamp = end.getUTCDate() !== start.getUTCDate() ? 'T235900' : stamp(end);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${ymd}${stamp(start)}/${ymd}${endStamp}`,
    ctz: CHURCH_TIME_ZONE,
    location: event.location,
    details: event.details ?? '',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

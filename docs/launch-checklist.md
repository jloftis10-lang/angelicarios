# Launch checklist

This site is **not ready for public launch** until every item below is
resolved. Everything here traces back to a placeholder in
`src/config/site.ts` or a missing asset — update that file (or the noted
location) as each item is confirmed; nothing else in the codebase should
need to change.

## Angelica / agent info (`src/config/site.ts` → `agent`)

- [ ] Angelica's last name
- [ ] Angelica's Georgia real-estate license number
- [ ] Angelica's phone number
- [ ] Angelica's email address

## Brokerage / compliance (`src/config/site.ts` → `brokerage`)

- [ ] Brokerage legal name
- [ ] Brokerage license number
- [ ] Brokerage office phone
- [ ] Brokerage office address
- [ ] Brokerage website
- [ ] Broker marketing/advertising approval for this site's copy and layout
- [ ] Confirm footer disclosure satisfies current Georgia Real Estate
      Commission advertising rules

## Media (see `public/images/README.md` for the full shot list)

- [ ] Real headshots
- [ ] Real lifestyle photos
- [ ] Real testimonials (`src/config/testimonials.ts` — do not fabricate)

## Service area & links

- [ ] Approved service areas confirmed (currently Peachtree City +
      South Metro Atlanta, per `src/config/site.ts` → `serviceAreas`)
- [ ] Brokerage-approved property search / IDX URL (`propertySearch.url`)
- [ ] Social profile URLs (Instagram / Facebook / LinkedIn)

## Site infrastructure

- [ ] Final production domain (`NEXT_PUBLIC_SITE_URL` env var, drives
      canonical URLs / sitemap / OG tags)
- [ ] Email delivery for lead forms — set `RESEND_API_KEY` and
      `LEAD_NOTIFICATION_EMAIL` env vars (see `src/app/api/lead/route.ts`);
      until then, submissions are only logged server-side, not emailed
- [ ] Analytics IDs if desired — `NEXT_PUBLIC_GA4_ID`,
      `NEXT_PUBLIC_CLARITY_ID`
- [ ] Google Search Console verification

## Content review

- [ ] Privacy policy legal review (`src/app/privacy/page.tsx`)
- [ ] Website disclaimer legal review (`src/app/terms/page.tsx`)
- [ ] Fair-housing review of all page copy
- [ ] Peachtree City market data — `src/config/site.ts` → `marketData`
      is currently empty (hidden in the UI by design); populate from a
      named, dated source before the market-stats section should render
- [ ] Five-village descriptions in `src/config/villages.ts` are
      intentionally general orientation copy — enrich with sourced detail
      when available

## How to tell what's still a placeholder

Any string starting with `[` in `src/config/site.ts` (e.g.
`[ANGELICA_PHONE]`) is an unconfirmed placeholder, not a real value. A
console warning fires automatically in every environment
(`src/components/ComplianceWarning.tsx`) as long as any required
compliance field remains a placeholder — check the browser console.

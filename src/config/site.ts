export const SITE = {
  name: 'DGUV V3 Prüfung Berlin',
  title: 'DGUV V3 Prüfung Berlin | E-Check nach VDE (BGV A3) | Elektroprüfung',
  description: 'DGUV V3 Prüfung Berlin ✓ E-Check nach VDE (BGV A3) ✓ Ortsveränderliche Geräte & ortsfeste Anlagen ✓ Prüfprotokoll & Prüfplakette ✓ Kurzfristige Termine ☎ 030 20007607',
  lang: 'de',
  url: 'https://xn--elektro-prfdienst-c3b.de/',
  twitterHandle: '',
  socials: {
    twitter: '',
    instagram: '',
    linkedin: '',
    dribbble: '',
  },
} as const;

export type SiteConfig = typeof SITE;

export const SITE = {
  name: 'Schlüsseldienst München',
  title: 'Schlüsseldienst München 24Std. - Türöffnung ab 29€ Festpreis',
  description: 'Der Schlüsseldienst München ✓ Monteur in 10-40 Min. vor Ort ▷ Türöffnung ohne Schäden ✓ Günstiger 24 Std. Service ✓ EC-Zahlung ☎ Jetzt anrufen!',
  lang: 'de',
  url: 'https://www.schlüsseldienst-münchen.bayern/',
  twitterHandle: '@schluesselmuc',
  socials: {
    twitter: 'https://twitter.com/example',
    instagram: 'https://instagram.com/example',
    linkedin: 'https://www.linkedin.com/company/example',
    dribbble: 'https://dribbble.com/example',
  },
} as const;

export type SiteConfig = typeof SITE;

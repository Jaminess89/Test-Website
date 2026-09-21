# DGUV V3 Prüfung Berlin — elektro-prüfdienst.de

Marketing-Website für die DGUV V3 Elektroprüfung in Berlin.
Live: https://elektro-prüfdienst.de (https://xn--elektro-prfdienst-c3b.de)

## Tech-Stack

- [Astro](https://astro.build) (statischer Build) + Tailwind CSS 4
- Kein Server-Backend nötig; Formular läuft über FormSubmit (AJAX)
- Cloudflare-Adapter ist konfiguriert, das Deployment erfolgt aber als
  statischer Upload (`dist/client`) auf klassischem Webhosting (ALL-INKL / KAS)

## Entwicklung

```bash
pnpm install
pnpm dev      # Dev-Server auf localhost:4321
pnpm build    # Produktions-Build nach dist/client
pnpm preview  # Build lokal testen
```

## Deployment (ALL-INKL / KAS)

1. `pnpm build`
2. Inhalt von `dist/client/` per FTP nach
   `/www/htdocs/w010028b/xn--elektro-prfdienst-c3b.de/` hochladen
   (Document-Root der Domain elektro-prüfdienst.de)
3. `.htaccess` mit `ErrorDocument 404 /404.html` liegt bei

## Struktur

- `src/pages/` — Seiten (index, impressum, datenschutzerklaerung)
- `src/components/home/v2/` — Sektionen der Startseite
- `src/config/site.ts` — globale Site-Daten (Name, URL, Kontakt)
- `public/images/` — statische Bilder (werden 1:1 nach dist kopiert)
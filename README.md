# Rauchmelder Express

Premium-One-Page-Website für **Rauchmelder Express** – Rauchmelder-Service für Vermieter in Berlin & Brandenburg.

Die Website bewirbt Prüfung, Montage, Austausch und Nachrüstung von Rauchwarnmeldern inklusive digitalem Prüfprotokoll. Primäres Ziel ist die **Anfrage eines kostenlosen Festpreis-Angebots** (Formular in `#angebot`).

## Technologie

- [Astro](https://astro.build) (statische Ausgabe, `output: "static"`)
- Astro-Komponenten mit Scoped Styles, TypeScript
- Kein Frontend-Framework, kein Tailwind/Bootstrap – minimales natives JavaScript
- Lokale System-Font (kein Google Fonts), lokale Assets

## Voraussetzungen

- Node.js **18.17+** oder **20+** (empfohlen: aktuelle LTS-Version)

## Befehle

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Entwicklungsserver (http://localhost:4321)
npm run check      # Astro- & TypeScript-Prüfung
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal ansehen
```

## Projektstruktur

- `src/pages/index.astro` – einzige Seite (komponiert nur Sektionen)
- `src/layouts/BaseLayout.astro` – HTML-Grundgerüst, Meta/SEO, JSON-LD
- `src/components/` – alle Sektionen; `src/components/ui/` – wiederverwendbare Bausteine
- `src/data/site.ts` – **alle Inhalte & Konfiguration** (Marke, Kontakt, Navigation, Bezirke, FAQ, Preise, Formularoptionen, Rechtstexte)
- `src/styles/global.css` – Design-Tokens (Farben, Abstände, Typografie)
- `public/` – statische Assets (Favicon, robots.txt, Bilder)
- `src/assets/reference/` – Referenz-Design (nur visuelle Vorlage, nicht Teil der Website)

## Inhalte ändern

Fast alle sichtbaren Texte liegen zentral in **`src/data/site.ts`** und werden per `map()` gerendert.

### Telefonnummer / E-Mail ändern

In `src/data/site.ts` im Objekt `contact`:

```ts
export const contact = {
  phoneDisplay: "030 123 456 78",   // sichtbare Nummer
  phoneHref: "tel:+493012345678",   // tel:-Link
  email: "hallo@rauchmelder-express.de",
  ...
};
```

### Bilder ersetzen

Aktuell werden hochwertige **SVG-Platzhalter** aus `public/images/` verwendet:

| Datei | Verwendung |
| --- | --- |
| `hero-technician-placeholder.svg` | Hero (Techniker mit Kunde) |
| `service-technician-placeholder.svg` | Über uns (Portrait/Techniker) |
| `case-study-placeholder.svg` | Musterbeispiel (Mehrfamilienhaus) |
| `berlin-placeholder.svg` | Berlin-Bild (reserviert) |

**So ersetzt du sie durch echte Fotos:**
1. Lege das Foto (JPG/WebP) in `src/assets/images/` ab.
2. Importiere es in der jeweiligen Komponente mit `import { Image } from "astro:assets"` und `import foto from "../assets/images/dein-foto.jpg"`.
3. Nutze `<Image src={foto} alt="…" widths={[…]} sizes="…" />` (Astro optimiert automatisch).
4. Im Hero: `loading="eager"` + `fetchpriority="high"` beibehalten; alle anderen Bilder `loading="lazy"`.
5. Passe `alt`-Text an. Entferne den Platzhalter.

### Echte Bewertungen eintragen

In `src/data/site.ts` das Array `testimonials` füllen (Name, Zitat, Quelle, optional `sourceUrl`). Sobald mindestens ein Eintrag vorhanden ist, zeigt die Sektion `#bewertungen` automatisch echte Bewertungen statt der neutralen Vertrauenskarten. **Nur echte, verifizierte Bewertungen eintragen.**

## Bezirks-Auswahl → Formular (Prefill)

Die 12 Bezirks-Karten in `#bezirke` sind Buttons. Ein Klick:
1. setzt das Select-Feld `#bezirk` im Formular auf den gewählten Bezirk,
2. scrollt sanft zu `#angebot`,
3. fokussiert das nächste Feld (`#plz`).

Umgesetzt mit wenig nativem JavaScript in `src/components/BerlinDistricts.astro`. Kein `localStorage`, kein Framework.

## Formular-Endpunkt (`PUBLIC_FORM_ENDPOINT`)

Das Anfrage-Formular validiert alle Eingaben (inkl. Regel „E-Mail **oder** Telefon“). Standardmäßig läuft es im **Demo-Modus**: Es wird geprüft, aber **nichts versendet**, und ein Hinweis erscheint.

Für den echten Versand:
1. `.env.example` kopieren zu `.env`
2. Endpunkt eintragen, z. B. ein Form-Backend (Formspree, Getform, eigener Endpoint):

```bash
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/DEIN-ID
```

3. Server neu starten. Der Endpoint muss `POST` mit `FormData` akzeptieren.

`.env` ist in `.gitignore` und wird **nicht** committet.

## Finale Domain konfigurieren

In `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://www.deine-domain.de", // TODO: finale Domain eintragen
  ...
});
```

Danach ggf. in `public/robots.txt` die Sitemap-URL ergänzen.

## Rechtstexte vervollständigen (wichtig!)

Impressum und Datenschutz sind als aufklappbare Bereiche im Footer (`#impressum`, `#datenschutz`) enthalten und mit **Platzhaltern** gefüllt. Vor Veröffentlichung müssen in `src/data/site.ts` (`legalSections`) sowie im Footer (`contact`) ergänzt/geprüft werden:

- [ ] Vollständige Anschrift (Straße, PLZ, Ort)
- [ ] Verantwortliche Person / Inhaber
- [ ] Handelsregister, USt-IdNr. (falls vorhanden)
- [ ] Aufsichtsbehörde (falls zutreffend)
- [ ] Vollständiger Datenschutztext (Hosting, Formularverarbeitung, Kontaktaufnahme)

> ⚠️ Rechtstexte individuell prüfen lassen. Keine Rechtsberatung durch diese Vorlage.

## Beispielinhalte verifizieren

Die Fallstudie in `#beispiel` ist ausdrücklich als **fiktives Musterbeispiel** gekennzeichnet. Zahlen vor Veröffentlichung prüfen oder durch echte, genehmigte Referenzen ersetzen.

## Commit & Deployment (GitHub)

```bash
git add .
git commit -m "Initial: Rauchmelder Express One-Page (Astro)"
git push origin main
```

Das Projekt ist host-unabhängig (`output: "static"`). Den Build-Ordner `dist/` auf einem beliebigen Static-Host bereitstellen (z. B. Netlify, Vercel, klassischer Webspace). `node_modules`, `dist` und `.env` sind via `.gitignore` ausgeschlossen.

## Hinweise

- Keine externen Fonts/Scripts – alles lokal, statisch gerendert.
- Nur eine Route (`/`). Es existieren bewusst **keine** Unterseiten für Leistungen, Bezirke, Impressum o. ä.
- Der Name „Normcheck“ wurde vollständig durch **Rauchmelder Express** ersetzt.

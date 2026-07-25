## 1. Site Info

- **SITE_TYPE**: Local Emergency Service (Locksmith)
- **HTML_LANG**: de

---

## 2. Color Token Mapping

### Visual Theme
The site uses a trustworthy, high-contrast, professional design with deep navy blue, pure white, and clean light gray backgrounds, accented by a striking light blue decorative border/line style and highly visible lime-green emergency action elements.

### Colors
- **background**: `hsl(210, 20%, 98%)` (Soft white/light-gray background used across light sections: `#F6F8FA`)
- **foreground**: `hsl(201, 71%, 19%)` (Deep navy blue for high-contrast primary text: `#0E3A52` / `rgb(14, 58, 82)`)
- **muted-foreground**: `hsl(191, 15%, 33%)` (Muted gray-blue for body copy: `#475B61` / `rgb(71, 91, 97)`)
- **border**: `hsl(200, 12%, 89%)` (Light silver gray for borders and pricing tables: `#E0E4E6` / `rgb(224, 228, 230)`)
- **surface**: `hsl(0, 0%, 100%)` (Pure white for cards and layout blocks: `#FFFFFF`)
- **primary**: `hsl(90, 60%, 51%)` (High-visibility lime green for primary CTA actions: `#7ACD37` / `rgb(122, 205, 55)`)
- **primary-foreground**: `hsl(0, 0%, 100%)` (White text on green buttons)
- **primary-hover**: `hsl(90, 60%, 41%)` (Darker lime green for hover feedback)
- **secondary**: `hsl(198, 65%, 49%)` (Vibrant sky blue accent color: `#1AAAEO` / `rgb(26, 170, 230)`)
- **secondary-foreground**: `hsl(0, 0%, 100%)`
- **secondary-hover**: `hsl(198, 65%, 39%)`
- **dark-background**: `hsl(201, 70%, 17%)` (Deep solid navy for high-contrast hero bars and content sections: `#113A51` / `rgb(17, 58, 81)`)
- **dark-foreground**: `hsl(0, 0%, 100%)` (Pure white text on dark backgrounds)
- **dark-muted-foreground**: `hsla(0, 0%, 100%, 0.75)` (Muted white text with 75% opacity)
- **dark-border**: `hsla(0, 0%, 100%, 0.15)` (Faint white borders for interactive page indicators)
- **accent**: `hsl(175, 59%, 56%)` (Gradient transition teal: `#4FCFC5` / `rgb(79, 207, 197)`)

### Page Background
Solid layout construction. Page sections transition cleanly between pure white (`hsl(0, 0%, 100%)`), light-gray `#F6F8FA`, and deep navy `#113A51`.

### Typography
- **Heading font**: `montserrat` (Curated classic sans alternative matching the bold geometric letterforms of CircularStd)
- **Body font**: `open-sans` (Curated classic sans alternative matching the friendly round geometry of Brandon Text)

---

## 3. Navigation Spec

- **NAV_FULL_WIDTH**: true
- **NAV_WIDTH**: 1920px
- **NAV_BACKGROUND**: `hsl(0, 0%, 100%)`
- **NAV_BORDER_RADIUS**: none
- **NAV_POSITION**: sticky
- **NAV_SHADOW**: none
- **SCROLL_BEHAVIOR**: none
- **NAV_DIVIDERS**:
  - Under active navigation link: Custom `::before` decorative blue line. Thickness: `3px`, Color: `rgb(26, 170, 230)`. Positioned at bottom edge of active element.

### Link Style
- **fontSize**: `text-[14px]` (Navigation links), `text-[24px]` (Header Logo/Title text)
- **fontWeight**: `font-bold` (700) for navigation links, `font-normal` (400) for logo text
- **fontFamily**: `open-sans`
- **textTransform**: `uppercase`
- **letterSpacing**: `tracking-normal`
- **color**: `hsl(201, 71%, 19%)`
- **link row layout**: Center-to-center link spacing defined by right-aligned group (`ml-auto`) with a gap of `gap-[30px]`.
- **activeColor**: Active link "Schlüsseldienst München" retains primary deep navy but features a `::before` styled absolute bottom accent border (`h-[3px] bg-secondary bottom-[-3px] left-0 right-0`).

### Logo
- **Size**: Text-based logo. Rendered as a text block `text-[24px] font-normal text-[#0E3A52]`.
- **Position**: Left aligned inside the header container.
- **Badge**: none
- **Logo swap**: none

### Dropdowns
- **Schlüsseldienst München** features an active chevron.

---

## 4. Section Plan

### Hero Section
- **id**: `hero`
- **theme**: LIGHT
- **background**: `hsl(200, 15%, 93%)` (`#ECF0F1` soft gray background)
- **text**: `hsl(201, 71%, 19%)`
- **heading color**: `hsl(201, 71%, 19%)`
- **heading size**: `text-[64px]` (h1), `font-black` (900), `leading-[80px]`
- **body size**: `text-[18px]`
- **layout**: Two-column layout on desktop: Left content panel (`w-full md:w-[55%]`), Right image panel (`w-full md:w-[45%]`).
- **padding**: `py-[92px]`
- **content**:
  - H1: "Schlüsseldienst München"
  - Highlighted badge text: "Festpreis ab 29,- €" (White bold text inside a bright blue `bg-[#1AAAEO]` badge wrapper)
  - Bullet elements with green checkmarks: "in 10 – 40 Minuten vor Ort"
  - CTA Button: Solid Green Emergency Phone Number link with embedded telephone icon.
- **images**:
  - Right background layer features a faded transition. The main model lock technician is positioned right: display width `1024px`, display height `683px`, `object-fit: cover`. Original matching path: `/wp-content/uploads/2021/04/schluesseldienst-muenchen-start.png`.
- **buttons**:
  - Solid Emergency Phone Button: `bg-[#7ACD37] hover:bg-[#69b02e] text-white rounded-[9px] px-[16px] py-[10px] text-[18px] font-bold flex items-center gap-2`. Text: "0157 359 819 64 Jetzt anrufen!"

### Trust Bar (Sub-Hero Badge)
- **id**: `trust-bar`
- **theme**: DARK
- **background**: `hsl(201, 70%, 17%)` (`#113A51` deep navy blue bar)
- **text**: `hsl(0, 0%, 100%)`
- **layout**: Flex layout, `justify-between`, `items-center` on desktop. Left side features the "Ausgezeichnet" rating badge with star indicators. Right side displays a 4-column feature list with clean circular check icons.
- **padding**: `py-[24px]`
- **images**:
  - Verifiziertes Siegel element: width `112px`, height `112px`. Matching path: `/wp-content/uploads/2021/04/bewertungssiegel-e1619561593946.png`.

### Headline Section (Fairer Schlüsseldienst)
- **id**: `headline-intro`
- **theme**: LIGHT
- **background**: `hsl(0, 0%, 100%)`
- **text**: `hsl(191, 15%, 33%)`
- **heading color**: `hsl(201, 71%, 19%)`
- **heading size**: `text-[44px] font-bold text-center`
- **layout**: Centered single column heading, followed by a two-column grid. Left side: Circular cropped image of technician. Right side: Intro text block with secondary bolding.
- **padding**: `py-[48px]`
- **images**:
  - Monteur circular image: width `128px`, height `128px`, `rounded-full`. Matching path: `/wp-content/uploads/2021/04/Monteur-rund.png`.

### Price Promise Banner
- **id**: `price-promise`
- **theme**: DARK (Gradient Accent)
- **background**: `linear-gradient(90deg, rgb(26, 170, 230), rgb(79, 207, 197))`
- **text**: `hsl(0, 0%, 100%)`
- **heading size**: `text-[24px] font-bold`
- **layout**: Centered single-column block with a subtle border outline. Highlighting transparent pricing transparency values.
- **padding**: `py-[52px]`

### Table of Contents Section
- **id**: `toc-section`
- **theme**: LIGHT
- **background**: `hsl(210, 20%, 98%)` (`#F6F8FA`)
- **text**: `hsl(191, 15%, 33%)`
- **layout**: Max-width `740px` centered box with a light list of links leading directly to lower segments of the landing page.
- **padding**: `py-[32px] px-[24px]`

### Two-Column Cost Detail
- **id**: `costs-details`
- **theme**: LIGHT
- **background**: `hsl(0, 0%, 100%)`
- **layout**: Alternating image-left, text-right alternating structures for several sections ("Schlüsseldienst München Kosten", "Was kostet die Türöffnung in München?", "Anfahrtskosten").
- **images**: 
  - Each item displays: width `522px`, height `350px`, rounded-sm.

### Customer Reviews Carousel
- **id**: `reviews`
- **theme**: LIGHT
- **background**: `hsl(200, 15%, 93%)`
- **heading**: "Unsere Kundenbewertungen" `text-[44px] font-bold text-center mb-8`
- **slider**:
  - slideType: text + profile card
  - visibleAtOnce: 3 cards in desktop grid, 1 on mobile
  - items:
    - Slide 1: Marc S. (vor 3 Tagen) - "Cooles Team und und schneller Service. Nummer ist fürs nächste Missgeschick gespeichert."
    - Slide 2: Ines W. (vor 2 Wochen) - "Ich habe mit dem Schlüsseldienst München mein Eigenheim abgesichert. Sehr zuvorkommender Dienst."
    - Slide 3: Theo H. (vor 3 Wochen) - "Reibungsloser Ablauf und saubere, ehrliche Arbeit. So muss ein Schlüsseldienst sein!"

### Locksmith Slide-Show Block (Interactive)
- **id**: `lock-services-slider`
- **theme**: DARK
- **background**: `hsl(201, 70%, 17%)` (`#113A51`)
- **heading**: "Schlosstausch und Zylindertausch durch den Schlüsseldienst München"
- **layout**: Grid layout: Left-hand side displays a high-quality vertical product slide presentation with a thick accent border `border-[14px] border-[#1AAAEO]`. Right-hand side lists matching service items in interactive tabs.
- **slider**:
  - slideType: images matched to text panels
  - totalSlides: 5
  - visibleAtOnce: 1
  - items:
    - Tab 1: "Türschloss wechseln" - Text on changing lock cylinders, security risks of lost keys.
    - Tab 2: "Schloss austauschen" - Upgrading old locks to high-security models with drill protection.
    - Tab 3: "Schließzylinder wechseln" - Replacing worn out cylinders to avoid jammed locks.
    - Tab 4: "Briefkastenschloss wechseln" - Quick replacement of postbox locks when keys go missing.
    - Tab 5: "Tür reparieren" - Cost-effective lock repairs without complete replacement.

### FAQ Accordion Section
- **id**: `faq`
- **theme**: LIGHT
- **background**: `hsl(210, 20%, 98%)` (`#F6F8FA`)
- **heading**: "Häufig gestellte Fragen" (Inferred from screenshot)
- **layout**: Clean vertical max-width `740px` accordion container.
- **accordion**:
  - Q: "Warum der Schlüsseldienst München?"
    - A: [UNEXTRACTED — leave text minimal, do NOT invent copy]
  - Q: "Wie lange braucht der Schlüsseldienst München zu mir?"
    - A: [UNEXTRACTED — leave text minimal, do NOT invent copy]
  - Q: "Was kostet die Türöffnung beim Schlüsseldienst München?"
    - A: [UNEXTRACTED — leave text minimal, do NOT invent copy]
  - Q: "Verursacht der Einsatz Schäden an meiner Tür?"
    - A: [UNEXTRACTED — leave text minimal, do NOT invent copy]
  - Q: "Wie kann ich die Leistungen vom Schlüsseldienst München bezahlen?"
    - A: [UNEXTRACTED — leave text minimal, do NOT invent copy]

### USP Grid Section (Friendly Locksmith Image Background)
- **id**: `usp-bg-section`
- **theme**: DARK
- **background**: `hsl(201, 70%, 17%)` with overlay
- **backgroundImage**: `/wp-content/uploads/2021/04/freundlicher-handwerker-e1619617748689.jpg`
- **overlay**: `rgba(13, 51, 74, 0.85)`
- **heading**: "Warum Schlüsseldienst München?"
- **layout**: 4-column service benefit grid. Features distinct USP badges (Fast arrival, 24/7, No damage, Fair pricing).

### Transparent Pricing Tables
- **id**: `price-list`
- **theme**: LIGHT
- **background**: `hsl(210, 20%, 98%)`
- **heading**: "Schlüsseldienst München Preisliste"
- **layout**: Grid with 2 distinct card-tables (`grid-cols-1 md:grid-cols-2`, gap `40px`).
- **content**:
  - Left Card: "Türöffnung" with pricing list (e.g. key extraction starting at 29€, standard opening starting at 29€, weekends +50%, late nights +100%).
  - Right Card: "Zusatzleistungen" (Anfahrtspauschale fixed price 23.80€, cylinder replacement starting at 67€).

---

## 5. Favicon

- The builder must call `process_favicon_image({ imageUrl: "https://pagesmith-cdn.com/ceb8c319/images/cropped-favicon-32x32-32.webp" })` to install the branded key-lock icon favicon.

---

## 6. Footer

- **background**: `hsl(201, 70%, 17%)` (`#113A51` deep navy)
- **textColor**: `hsl(191, 15%, 75%)` (Muted pale gray text)
- **columns**: 3 columns
- **Link Groups**:
  - Column 1: Brand footer label: "Schlüsseldienst München", copyright notice, and base site text.
  - Column 2: Quick Links (Leistungen, Einbruchschutz München, Preise, Datenschutzerklärung, Impressum).
  - Column 3: Regional neighborhood landing pages links (Bogenhausen, Giesing, Haidhausen, Maxvorstadt, Schwabing, etc.).

---

## 7. Files

- **MODIFY**: 
  - `src/components/Navigation.astro`
  - `src/components/Footer.astro`
  - `src/data/site.ts`
  - `src/styles/global.css`
- **CREATE**:
  - `src/components/home/Hero.astro`
  - `src/components/home/TrustBar.astro`
  - `src/components/home/Intro.astro`
  - `src/components/home/PricePromise.astro`
  - `src/components/home/ServiceSlider.astro`
  - `src/components/home/FaqAccordion.astro`
  - `src/components/home/PriceList.astro`
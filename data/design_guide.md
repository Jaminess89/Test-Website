# Technical Design Specification: Schlüsseldienst München

This document contains the exact technical specification required to rebuild the target website with pixel-perfect fidelity. Follow these instructions mechanically.

---

## 1. Site Info
- **SITE_TYPE:** Local Professional Services (Locksmith)
- **HTML_LANG:** `de`

---

## 2. Color Token Mapping

### Visual Theme
Clean, professional locksmith website featuring high-contrast blue and green branding. Deep blue conveys security and trust, while bright lime green directs user action to primary phone CTAs.

### Colors
- **background:** `hsl(210, 20%, 96%)` (RGB: `246, 248, 250` / `#F6F8FA`)
- **foreground:** `hsl(192, 16%, 33%)` (RGB: `71, 91, 97` / `#475B61`)
- **muted-foreground:** `hsl(192, 16%, 50%)`
- **border:** `hsl(200, 12%, 89%)` (RGB: `224, 228, 230` / `#E0E4E6`)
- **surface:** `hsl(0, 0%, 100%)` (RGB: `255, 255, 255` / `#FFFFFF`)
- **primary:** `hsl(91, 61%, 51%)` (RGB: `122, 205, 55` / `#7ACD37` - Lime Green)
- **primary-foreground:** `hsl(0, 0%, 100%)`
- **primary-hover:** `hsl(91, 61%, 41%)`
- **secondary:** `hsl(200, 71%, 19%)` (RGB: `14, 58, 82` / `#0E3A52` - Deep Navy)
- **secondary-foreground:** `hsl(0, 0%, 100%)`
- **secondary-hover:** `hsl(200, 71%, 14%)`
- **dark-background:** `hsl(201, 70%, 17%)` (RGB: `13, 51, 74` / `#0D334A` - Dark Blue)
- **dark-foreground:** `hsl(0, 0%, 100%)`
- **dark-muted-foreground:** `rgba(255, 255, 255, 0.75)`
- **dark-border:** `rgba(255, 255, 255, 0.15)`
- **accent:** `hsl(198, 80%, 50%)` (RGB: `26, 170, 230` / `#1AAAE6` - Accent Blue)

### Page Background
Solid white `hsl(0, 0%, 100%)` for structural layers, with sections alternating between light grey, white, and deep security blue.

### Typography
- **Heading font:** `plus-jakarta-sans` (Matches the modern sans structure of `CircularStd`)
- **Body font:** `open-sans` (Clean classic sans matching the high readability of `Brandon Text`)

---

## 3. Navigation Spec

- **NAV_FULL_WIDTH:** `true`
- **NAV_WIDTH:** `1920px` (Max-container: `1200px` centered)
- **NAV_BACKGROUND:** `hsl(0, 0%, 100%)`
- **NAV_POSITION:** `sticky` (Stays fixed at top of viewport)
- **NAV_SHADOW:** `0 2px 10px rgba(0, 0, 0, 0.05)`
- **SCROLL_BEHAVIOR:** `none`
- **NAV_DIVIDERS:** Active bottom border highlight on links using absolute pseudo-elements. Blue line height `3px`, color `rgb(26, 170, 230)`.

### Link Style
- **fontSize:** `text-[14px]`
- **fontWeight:** `font-bold`
- **fontFamily:** `open-sans`
- **textTransform:** `uppercase`
- **letterSpacing:** `tracking-normal`
- **color:** `hsl(200, 71%, 19%)` (Secondary Deep Navy)
- **link row layout:** Center-right distribution, center-to-center pitch approx `166px` accomplished using `px-[20px]`.
- **activeColor:** Underline decoration active color: `rgb(26, 170, 230)`.

### Logo
- **Size:** Width `240px`, Height `50px`
- **Position:** Aligned left within the max-width container, vertically centered.
- **Badge:** `false` (Plain text logo representation `Schlüsseldienst München` styling with size `text-[24px]` in `secondary` brand color).

### Dropdowns
- **Schlüsseldienst München:** `hasDropdown: true` with a clean down chevron.

---

## 4. Section Plan

### Hero Section
- **id:** `hero`
- **theme:** LIGHT
- **background:** `hsl(200, 15%, 94%)` (`rgb(236, 240, 241)`)
- **layout:** Flex layout split into a text side (left) and an image side (right). Container max-width `1200px`, padding-block `92px`.
- **headings:** `h1` size `text-[64px]` line-height `[80px]` font-black (`font-black`) color `secondary` ("Schlüsseldienst München").
- **body size:** `text-[18px]` line-height `[27.9px]`.
- **CTA Button:** 
  - **Type:** Solid Phone button
  - **Shape:** Soft rounded corners `border-radius: 9px`
  - **Color:** `bg-[#7ACD37]` (primary) with white text.
  - **Text:** "0157 359 819 64 Jetzt anrufen!"
  - **Padding:** `py-[10px] pr-[16px] pl-[12px]`
  - **Font:** `text-[18px] font-bold`
- **images:** Main hero photo on right: `displayWidth: 1024px`, aspect-ratio matching source, layout uses a soft linear gradient overlay `linear-gradient(90deg, rgb(236, 240, 241), rgba(236, 240, 241, 0))` to blend with background.

---

### Trust Banner
- **id:** `trust-banner`
- **theme:** DARK
- **background:** `hsl(201, 65%, 19%)` (`rgb(17, 58, 81)`)
- **layout:** Flex row, items centered, space-between distribution.
- **images:** 
  - Verification Badge on left: `112px x 112px`
- **content:** Verification elements, rating details ("4,8 von 5,0 aus 142 Bewertungen"), and high-contrast checkmarks checklist.

---

### Lead Section (Fairer Schlüsseldienst)
- **id:** `fairer-notdienst`
- **theme:** LIGHT
- **background:** `hsl(0, 0%, 100%)`
- **layout:** 2-column flex row, items centered.
- **heading:** `h2` size `text-[44px]` color `secondary`.
- **images:** Rounded portrait of a locksmith technician: `280px x 280px`, circular border-radius.

---

### Fair Price Promise
- **id:** `preisversprechen`
- **theme:** DARK (Accent)
- **background:** `linear-gradient(90deg, rgb(26, 170, 230), rgb(79, 207, 197))`
- **layout:** Center aligned content block, padding-block `52px`.
- **headings:** `h3` size `text-[24px]` font-bold color `#FFFFFF` ("Unser faires Preisversprechen").

---

### Pricing Table Section
- **id:** `preisliste`
- **theme:** LIGHT
- **background:** `hsl(210, 20%, 96%)`
- **layout:** Grid layout: `grid-cols-2` (columns `560px` / `560px`), gap `40px`. Padding-block `120px`.
- **headings:** `h2` size `text-[44px]` color `secondary` ("Schlüsseldienst München Preisliste").
- **pricing design elements:** Clean pricing boxes with subtle borders and colored left-aligned accent gradients on price tags.

---

### Interactive Services Slider (Zylindertausch)
- **id:** `services-slider`
- **theme:** DARK
- **background:** `hsl(201, 70%, 17%)` (`rgb(13, 51, 74)`)
- **layout:** 2 columns (Image on left `522px`, text on right `545px`), grid gap `8%`. Padding-block `100px`.
- **headings:** `h2` size `text-[48px]` ("Schlosstausch und Zylindertausch...").
- **slider config:** 
  - **totalSlides:** 5
  - **slideType:** Interactive / Carousel synchronized with active text panel tabs.
  - **items:**
    1. "Türschloss wechseln"
    2. "Schloss austauschen"
    3. "Schließzylinder wechseln"
    4. "Briefkastenschloss wechseln"
    5. "Tür reparieren"
- **decorative element:** Accent border outline frame in `rgb(26, 170, 230)` positioned behind the image carousel viewport.

---

### Interactive FAQ Accordion
- **id:** `faq`
- **theme:** LIGHT
- **background:** `hsl(210, 20%, 96%)`
- **layout:** Centered single column container with max-width `740px`. Padding-block `112px`.
- **headings:** Accordion item headers size `text-[20px]` font-bold color `secondary`.
- **accordionItems:**
  - *Question:* "Warum der Schlüsseldienst München?"
  - *Question:* "Wie lange braucht der Schlüsseldienst München zu mir?"
  - *Question:* "Was kostet die Türöffnung beim Schlüsseldienst München?"
  - *Question:* "Verursacht der Einsatz Schäden an meiner Tür?"
  - *Question:* "Wie kann ich die Leistungen vom Schlüsseldienst München bezahlen?"

---

### USP Banner (Friendly Locksmith Background)
- **id:** `usp-banner`
- **theme:** DARK
- **background:** `hsl(201, 70%, 17%)`
- **backgroundImage:** Background photo featuring friendly craftsman with color overlay `rgb(122, 205, 55)` configured for high visual contrast.
- **layout:** Row grid of 4 column highlight items (`290px` width each).

---

## 5. Favicon
- **Instruction:** Call `process_favicon_image({ imageUrl: "https://pagesmith-cdn.com/2be62e80/images/cropped-favicon-32x32-32.webp" })`.

---

## 6. Footer
- **Style:** Flat dark background `hsl(201, 70%, 17%)` blending to site base values at the absolute bottom.
- **Text color:** `hsl(192, 16%, 50%)` (Muted)
- **Columns:** 3 columns layout.
- **Link Groups:**
  - **Group 1:** Leisungen, Einbruchschutz München, Preise, Datenschutzerklärung, Impressum.

---

## 7. Files
- **MODIFY:** `src/components/Navigation.astro`, `src/components/Footer.astro`, `src/styles/global.css`
- **CREATE:**
  - `src/components/home/Hero.astro`
  - `src/components/home/TrustBanner.astro`
  - `src/components/home/LeadIntro.astro`
  - `src/components/home/PricePromise.astro`
  - `src/components/home/PricingTable.astro`
  - `src/components/home/ServicesSlider.astro`
  - `src/components/home/FAQAccordion.astro`
  - `src/components/home/USPBanner.astro`
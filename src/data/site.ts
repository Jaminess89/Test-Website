/**
 * Zentrale Inhaltsdaten für Rauchmelder Express.
 * Alle wiederkehrenden Inhalte werden hier gepflegt und von den
 * Komponenten per map() gerendert.
 *
 * ACHTUNG: Mit [TODO] markierte Werte sind Platzhalter und müssen vor
 * der Veröffentlichung durch geprüfte, echte Angaben ersetzt werden.
 */

/* ---------- Typen ---------- */

export interface NavItem {
  label: string;
  href: string;
  cta?: boolean;
}

export interface TrustPoint {
  icon: string;
  label: string;
}

export interface TargetGroup {
  icon: string;
  title: string;
  text: string;
}

export interface ProblemCheck {
  question: string;
}

export interface InspectionItem {
  icon: string;
  title: string;
  text?: string;
}

export interface Service {
  icon: string;
  title: string;
  text: string;
  items: string[];
}

export interface Benefit {
  icon: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface ProtocolRow {
  room: string;
  status: "ok" | "warning";
  statusLabel: string;
  action: string;
  next: string;
}

export interface CaseStat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  source: string;
  sourceUrl?: string;
}

export interface TrustCard {
  icon: string;
  title: string;
  text: string;
}

export interface PricingItem {
  title: string;
  items: string[];
  note: string;
}

export interface ActionReason {
  icon: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}

/* ---------- Marke & Kontakt ---------- */

export const brand = {
  name: "Rauchmelder Express",
  descriptor: "Berlin & Brandenburg",
  tagline: "Rauchmelder-Service für Vermieter",
} as const;

export const contact = {
  phoneDisplay: "030 123 456 78", // TODO: echte Rufnummer eintragen
  phoneHref: "tel:+493012345678", // TODO: passend zur Rufnummer anpassen
  email: "hallo@rauchmelder-express.de", // TODO: echte E-Mail-Adresse eintragen
  region: "Berlin & Brandenburg",
  company: "Rauchmelder Express",
  street: "[Straße und Hausnummer ergänzen]", // TODO
  city: "[Postleitzahl und Ort ergänzen]", // TODO
} as const;

export const cta = {
  primary: "Kostenloses Festpreis-Angebot erhalten",
  primaryHref: "#angebot",
} as const;

/* ---------- Navigation ---------- */

export const navItems: NavItem[] = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Prüfprotokoll", href: "#pruefprotokoll" },
  { label: "Bezirke", href: "#bezirke" },
  { label: "FAQ", href: "#faq" },
  { label: "Festpreis anfragen", href: "#angebot", cta: true },
];

/* ---------- Vertrauensleiste ---------- */

export const trustPoints: TrustPoint[] = [
  { icon: "map-pin", label: "Regional in Berlin" },
  { icon: "file-check", label: "Digitales Prüfprotokoll" },
  { icon: "tag", label: "Klare Angebote" },
  { icon: "user", label: "Persönlicher Ansprechpartner" },
];

/* ---------- Zielgruppen ---------- */

export const targetGroups: TargetGroup[] = [
  {
    icon: "key",
    title: "Private Vermieter",
    text: "Für einzelne Wohnungen und kleinere Bestände.",
  },
  {
    icon: "building",
    title: "Hausverwaltungen",
    text: "Für gepflegte Objekte mit vielen Einheiten.",
  },
  {
    icon: "buildings",
    title: "Wohnungsunternehmen",
    text: "Für größere Wohnungsbestände in Berlin.",
  },
  {
    icon: "briefcase",
    title: "Gewerbliche Eigentümer",
    text: "Für vermietete Gewerbe- und Mischobjekte.",
  },
];

/* ---------- Nachweis-Check ---------- */

export const problemChecks: ProblemCheck[] = [
  { question: "Sind alle Wohnungen erfasst?" },
  { question: "Ist der Zustand dokumentiert?" },
  { question: "Ist das Gerätealter bekannt?" },
  { question: "Gibt es ein aktuelles Prüfprotokoll?" },
];

/* ---------- Prüfumfang ---------- */

export const inspectionItems: InspectionItem[] = [
  { icon: "detector", title: "Gerät vorhanden", text: "Jeder Pflichtraum ist ausgestattet." },
  { icon: "map-pin", title: "Position geprüft", text: "Richtiger Platz im Raum." },
  { icon: "check-circle", title: "Funktion geprüft", text: "Testalarm je Gerät." },
  { icon: "clipboard", title: "Zustand erfasst", text: "Sichtbarer Zustand notiert." },
  { icon: "calendar", title: "Alter dokumentiert", text: "Gerätealter je Wohnung." },
  { icon: "refresh", title: "Austausch vermerkt", text: "Bedarf klar gekennzeichnet." },
];

/* ---------- Leistungen ---------- */

export const services: Service[] = [
  {
    icon: "drill",
    title: "Montage",
    text: "Saubere Erstmontage und dokumentierte Inbetriebnahme.",
    items: ["Bedarf erfassen", "Geräte montieren", "Wohnung dokumentieren"],
  },
  {
    icon: "search-check",
    title: "Prüfung",
    text: "Zustand, Funktion und Position nachvollziehbar prüfen.",
    items: ["Funktion kontrollieren", "Zustand erfassen", "Protokoll erstellen"],
  },
  {
    icon: "refresh",
    title: "Austausch",
    text: "Defekte oder alte Geräte sauber ersetzen.",
    items: ["Bedarf feststellen", "Geräte austauschen", "Austausch dokumentieren"],
  },
];

/* ---------- Vorteile ---------- */

export const benefits: Benefit[] = [
  {
    icon: "users",
    title: "Weniger Abstimmung",
    text: "Mietertermine koordinieren wir auf Wunsch.",
  },
  {
    icon: "file-check",
    title: "Klare Dokumentation",
    text: "Jede Wohnung mit eigenem Prüfprotokoll.",
  },
  {
    icon: "calendar",
    title: "Fristen im Blick",
    text: "Der nächste Termin ist jederzeit dokumentiert.",
  },
  {
    icon: "wallet",
    title: "Planbare Kosten",
    text: "Sie erhalten vorab ein klares Angebot.",
  },
];

/* ---------- Ablauf ---------- */

export const processSteps: ProcessStep[] = [
  {
    title: "Objekt angeben",
    text: "Wohnungen, Standort und Leistung mitteilen.",
  },
  {
    title: "Angebot erhalten",
    text: "Sie erhalten ein klares Angebot und einen Termin.",
  },
  {
    title: "Protokoll erhalten",
    text: "Nach dem Service erhalten Sie die Dokumentation.",
  },
];

/* ---------- Protokoll-Vorschau (Beispieldaten) ---------- */

export const protocolRows: ProtocolRow[] = [
  { room: "Flur", status: "ok", statusLabel: "In Ordnung", action: "Keine", next: "07/2027" },
  { room: "Wohnzimmer", status: "ok", statusLabel: "In Ordnung", action: "Keine", next: "07/2027" },
  { room: "Schlafzimmer", status: "warning", statusLabel: "Batterie schwach", action: "Batterie getauscht", next: "07/2027" },
  { room: "Kinderzimmer", status: "ok", statusLabel: "In Ordnung", action: "Keine", next: "07/2027" },
  { room: "Küche", status: "warning", statusLabel: "Austausch prüfen", action: "Rückmeldung folgt", next: "01/2027" },
];

/* ---------- Musterbeispiel (kein echter Kundenauftrag) ---------- */

export const caseStudy = {
  label: "Beispielhafter Ablauf",
  object: "Mehrfamilienhaus in Berlin",
  stats: [
    { value: "12", label: "Wohnungen" },
    { value: "38", label: "Rauchmelder" },
    { value: "1", label: "Terminplan für alle Mieter" },
    { value: "12", label: "Protokolle je Wohnung" },
  ] satisfies CaseStat[],
};

/* ---------- Bewertungen / Vertrauen ---------- */

// TODO: Erst hier echte, verifizierte Kundenbewertungen eintragen
// (mit Quelle und Quellen-Link). Solange das Array leer ist, zeigt die
// Website stattdessen neutrale Vertrauenskarten – keine erfundenen Bewertungen.
export const testimonials: Testimonial[] = [];

export const trustCards: TrustCard[] = [
  {
    icon: "message",
    title: "Klare Kommunikation",
    text: "Sie wissen vorab, was passiert und was es kostet.",
  },
  {
    icon: "sparkles",
    title: "Saubere Durchführung",
    text: "Rücksichtsvolles Arbeiten in bewohnten Wohnungen.",
  },
  {
    icon: "file-check",
    title: "Nachvollziehbare Dokumentation",
    text: "Jede Prüfung sauber je Wohnung festgehalten.",
  },
];

/* ---------- Preise ---------- */

export const pricingItems: PricingItem[] = [
  {
    title: "Prüfung",
    items: ["Funktion und Zustand prüfen", "Digitales Prüfprotokoll"],
    note: "Preis nach Objekt und Aufwand",
  },
  {
    title: "Montage",
    items: ["Geräte fachgerecht montieren", "Inbetriebnahme dokumentieren"],
    note: "Preis nach Objekt und Aufwand",
  },
  {
    title: "Austausch",
    items: ["Altgeräte sauber ersetzen", "Austausch dokumentieren"],
    note: "Preis nach Objekt und Aufwand",
  },
];

export const priceFactors: string[] = [
  "Anzahl Wohnungen",
  "Anzahl Geräte",
  "Gewünschte Leistung",
  "Zugang und Deckenhöhe",
];

/* ---------- Über uns ---------- */

// TODO: Name, Rolle und Erfahrung durch echte, geprüfte Angaben ersetzen.
export const about = {
  name: "[Name des Inhabers ergänzen]", // TODO
  role: "Inhaber und Servicetechniker", // TODO: Rolle bestätigen
  intro:
    "Rauchmelder Express betreut Vermieter und Hausverwaltungen persönlich in Berlin und Brandenburg – vom ersten Anruf bis zum fertigen Protokoll.",
  points: [
    "Fester Ansprechpartner",
    "Klare Kommunikation",
    "Sauberes Arbeiten",
    "Erfahrung mit Mietwohnungen",
  ],
};

/* ---------- Handlungsbedarf ---------- */

export const actionReasons: ActionReason[] = [
  { icon: "file-x", title: "Unterlagen fehlen" },
  { icon: "question", title: "Gerätealter unbekannt" },
  { icon: "key", title: "Objekt neu übernommen" },
  { icon: "bell", title: "Mieter melden Defekte" },
  { icon: "home", title: "Wohnungen neu vermietet" },
  { icon: "list", title: "Überblick fehlt" },
];

/* ---------- Berliner Bezirke ---------- */

export const districts: string[] = [
  "Mitte",
  "Friedrichshain-Kreuzberg",
  "Pankow",
  "Charlottenburg-Wilmersdorf",
  "Spandau",
  "Steglitz-Zehlendorf",
  "Tempelhof-Schöneberg",
  "Neukölln",
  "Treptow-Köpenick",
  "Marzahn-Hellersdorf",
  "Lichtenberg",
  "Reinickendorf",
];

/* ---------- FAQ ---------- */

export const faqItems: FaqItem[] = [
  {
    question: "Übernehmen Sie Mietertermine?",
    answer:
      "Ja, auf Wunsch koordinieren wir die Termine direkt mit Ihren Mietern. Sie erhalten vorab einen klaren Terminplan und müssen sich um die Abstimmung nicht kümmern.",
  },
  {
    question: "Muss der Vermieter anwesend sein?",
    answer:
      "In der Regel nicht. Nach der Terminabsprache führen wir den Service eigenständig durch. Sie erhalten anschließend die vollständige Dokumentation.",
  },
  {
    question: "Wie lange dauert eine Prüfung?",
    answer:
      "Pro Wohnung dauert eine Prüfung meist nur wenige Minuten. Bei größeren Objekten planen wir die Termine so, dass alles zügig erledigt ist.",
  },
  {
    question: "Was passiert bei einem Defekt?",
    answer:
      "Defekte oder schwache Batterien dokumentieren wir im Protokoll. Auf Wunsch tauschen wir betroffene Geräte direkt aus – abgestimmt auf Ihr Angebot.",
  },
  {
    question: "Wann erhalte ich das Prüfprotokoll?",
    answer:
      "Nach Abschluss des Services erhalten Sie das digitale Prüfprotokoll für jede Wohnung. So haben Sie die Dokumentation jederzeit griffbereit.",
  },
  {
    question: "Arbeiten Sie in allen Berliner Bezirken?",
    answer:
      "Ja, wir sind in allen zwölf Berliner Bezirken im Einsatz. Auf Anfrage betreuen wir auch Objekte in Brandenburg.",
  },
  {
    question: "Sind Einzelaufträge möglich?",
    answer:
      "Ja, wir betreuen sowohl einzelne Wohnungen als auch größere Bestände. Teilen Sie uns einfach mit, was Sie benötigen.",
  },
  {
    question: "Wovon hängt der Preis ab?",
    answer:
      "Entscheidend sind die Anzahl der Wohnungen und Geräte, die gewünschte Leistung sowie die Gegebenheiten vor Ort. Sie erhalten vor der Beauftragung immer ein konkretes Angebot.",
  },
];

/* ---------- Formular ---------- */

export const serviceOptions: string[] = [
  "Prüfung",
  "Montage",
  "Austausch",
  "Nachrüstung",
  "Komplettservice",
  "Noch nicht sicher",
];

export const districtOptions: string[] = [
  ...districts,
  "Brandenburg / anderer Ort",
];

/* ---------- Rechtliches (Platzhalter!) ---------- */

// TODO: Alle Angaben in diesen Abschnitten sind Platzhalter und müssen
// vor Veröffentlichung vervollständigt und rechtlich geprüft werden.
export const legalSections: LegalSection[] = [
  {
    id: "impressum",
    title: "Impressum",
    paragraphs: [
      "Angaben gemäß § 5 DDG:",
      "Rauchmelder Express – [Inhaber / Rechtsform ergänzen]",
      "[Straße und Hausnummer ergänzen] – [Postleitzahl und Ort ergänzen]",
      "Kontakt: Telefon 030 123 456 78 – E-Mail hallo@rauchmelder-express.de",
      "Umsatzsteuer-ID: [ergänzen, falls vorhanden] – Aufsichtsbehörde: [ergänzen, falls zutreffend]",
      "Hinweis: Dieses Impressum ist ein Platzhalter und muss vor der Veröffentlichung vervollständigt und rechtlich geprüft werden.",
    ],
  },
  {
    id: "datenschutz",
    title: "Datenschutzerklärung",
    paragraphs: [
      "Verantwortliche Stelle: Rauchmelder Express – [vollständige Anschrift ergänzen].",
      "Bei einer Anfrage über das Kontaktformular verarbeiten wir die angegebenen Daten (Name, Kontaktdaten, Objektangaben) zur Bearbeitung Ihrer Anfrage.",
      "Diese Website verwendet keine Tracking-Dienste und lädt keine externen Schriftarten oder Skripte von Drittanbietern.",
      "Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten. Wenden Sie sich dazu an die oben genannte E-Mail-Adresse.",
      "Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und muss vor der Veröffentlichung vervollständigt und rechtlich geprüft werden.",
    ],
  },
];

// @ts-check
import { defineConfig } from "astro/config";

// TODO: Vor der Veröffentlichung die finale Domain eintragen,
// z. B. site: "https://rauchmelder-express.de"
export default defineConfig({
  site: "https://example.com",
  output: "static",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
});

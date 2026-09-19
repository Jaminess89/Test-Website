// @ts-check
import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// TODO: Vor der Veröffentlichung die finale Domain eintragen,
// z. B. site: "https://rauchmelder-express.de"
export default defineConfig({
  site: "https://example.com",
  output: "static",
  trailingSlash: "never",
  adapter: cloudflare({ imageService: "passthrough" }),
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: "auto",
  },
});

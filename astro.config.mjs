// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tsots.github.io",
  base: "/mona",
  integrations: [mdx()],
});
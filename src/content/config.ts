import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const product = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "src/content/data" }),
  schema: z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
  }),
});

export const collections = { product };

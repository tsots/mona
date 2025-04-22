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

const marked = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { product, marked };

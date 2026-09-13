import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({
    pattern: "**/index.mdx",
    base: "./src/content/work",
    generateId: ({ entry }) => entry.replace(/\/index\.mdx$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // The fuller description shown under the title on the case study
      // page itself. Kept separate from `summary` (which drives cards and
      // meta tags) so the two don't end up saying the same sentence twice.
      overview: z.string(),
      cover: image(),
      coverAlt: z.string(),
      // Optional short label shown over the cover itself, so the work reads
      // at a glance without scrolling to the caption. Falls back to tags[0].
      coverTag: z.string().optional(),
      tags: z.array(z.string()).default([]),
      role: z.string(),
      timeline: z.string(),
      deliverables: z.array(z.string()).default([]),
      client: z.string().optional(),
      link: z.string().url().optional(),
      figma: z.string().url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(), // omit or "Present"
    link: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { work, experience };

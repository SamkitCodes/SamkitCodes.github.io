import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    stack: z.array(z.string()),
    link: z.string().url().optional(),
  }),
});

export const collections = { projects };

import { defineCollection, z } from 'astro:content';

const siteContent = defineCollection({
  type: 'data',
  schema: z.object({
    tagline: z.string(),
    description: z.string(),
  }),
});

const outcomes = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
    icon: z.string(),
  }),
});

const socialLinks = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    url: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  'site-content': siteContent,
  'outcomes': outcomes,
  'social-links': socialLinks,
};

import { defineCollection, z } from 'astro:content';

// slug is auto-generated from the markdown filename — must NOT be declared in schemas.

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    status:   z.enum(['published', 'draft', 'coming-soon']).default('draft'),
    summary:  z.string(),
    chapters: z.array(
      z.object({
        number: z.number(),
        title:  z.string(),
      })
    ).optional(),
    date:     z.string().optional(),
    tags:     z.array(z.string()).optional(),
  }),
});

const engineering = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    status:   z.enum(['published', 'draft', 'coming-soon']).default('draft'),
    summary:  z.string(),
    chapters: z.array(
      z.object({
        number: z.number(),
        title:  z.string(),
      })
    ).optional(),
    date:     z.string().optional(),
    tags:     z.array(z.string()).optional(),
  }),
});

const development = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    type:    z.enum(['framework', 'productivity', 'dashboard', 'tool']),
    summary: z.string(),
    date:    z.string().optional(),
    tags:    z.array(z.string()).optional(),
  }),
});

const recognitionAwards = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    year:    z.number(),
    prize:   z.string(),
    summary: z.string(),
    image:   z.string().optional(),
  }),
});

const recognitionCertifications = defineCollection({
  type: 'content',
  schema: z.object({
    issuer:    z.string(),
    title:     z.string(),
    date:      z.string(),
    certId:    z.string().optional(),
    verifyUrl: z.string().url().optional(),
    pdf:       z.string().optional(),
    summary:   z.string(),
  }),
});

const recognitionPresentations = defineCollection({
  type: 'content',
  schema: z.object({
    conference: z.string(),
    title:      z.string(),
    date:       z.string(),
    summary:    z.string(),
    image:      z.string().optional(),
  }),
});

const recognitionActivities = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    date:    z.string(),
    summary: z.string(),
    images:  z.array(z.string()).optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    date:    z.string(),
    source:  z.string().url().optional(),
    summary: z.string(),
  }),
});

export const collections = {
  'research':                   research,
  'engineering':                engineering,
  'development':                development,
  'recognition-awards':         recognitionAwards,
  'recognition-certifications': recognitionCertifications,
  'recognition-presentations':  recognitionPresentations,
  'recognition-activities':     recognitionActivities,
  'news':                       news,
};

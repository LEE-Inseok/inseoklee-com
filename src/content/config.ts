import { defineCollection, z } from 'astro:content';

// ─── Research ──────────────────────────────────────────────────────────────
const research = defineCollection({
  type: 'content',
  schema: z.object({
    slug:     z.string(),
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

// ─── Engineering ───────────────────────────────────────────────────────────
const engineering = defineCollection({
  type: 'content',
  schema: z.object({
    slug:     z.string(),
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

// ─── Development ───────────────────────────────────────────────────────────
const development = defineCollection({
  type: 'content',
  schema: z.object({
    slug:    z.string(),
    title:   z.string(),
    type:    z.enum(['framework', 'productivity', 'dashboard', 'tool']),
    summary: z.string(),
    date:    z.string().optional(),
    tags:    z.array(z.string()).optional(),
  }),
});

// ─── Recognition: Awards ───────────────────────────────────────────────────
const recognitionAwards = defineCollection({
  type: 'content',
  schema: z.object({
    slug:    z.string(),
    title:   z.string(),
    year:    z.number(),
    prize:   z.string(),
    summary: z.string(),
    image:   z.string().optional(),
  }),
});

// ─── Recognition: Certifications ───────────────────────────────────────────
const recognitionCertifications = defineCollection({
  type: 'content',
  schema: z.object({
    slug:      z.string(),
    issuer:    z.string(),
    title:     z.string(),
    date:      z.string(),
    certId:    z.string().optional(),
    verifyUrl: z.string().url().optional(),
    pdf:       z.string().optional(),
    summary:   z.string(),
  }),
});

// ─── Recognition: Presentations ────────────────────────────────────────────
const recognitionPresentations = defineCollection({
  type: 'content',
  schema: z.object({
    slug:       z.string(),
    conference: z.string(),
    title:      z.string(),
    date:       z.string(),
    summary:    z.string(),
    image:      z.string().optional(),
  }),
});

// ─── Recognition: Activities ───────────────────────────────────────────────
const recognitionActivities = defineCollection({
  type: 'content',
  schema: z.object({
    slug:    z.string(),
    title:   z.string(),
    date:    z.string(),
    summary: z.string(),
    images:  z.array(z.string()).optional(),
  }),
});

// ─── News ──────────────────────────────────────────────────────────────────
const news = defineCollection({
  type: 'content',
  schema: z.object({
    slug:    z.string(),
    title:   z.string(),
    date:    z.string(),
    source:  z.string().url().optional(),
    summary: z.string(),
  }),
});

// ─── Export ────────────────────────────────────────────────────────────────
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

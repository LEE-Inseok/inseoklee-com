import { defineCollection, z } from 'astro:content';

// slug is auto-generated from the markdown filename — must NOT be declared in schemas.

// A detail-page image is either a bare path or a path + caption. When any image
// carries a caption, ProjectDetail switches from the small 3-up photo strip to a
// larger, stacked figure layout with the caption shown beneath each figure —
// better for diagrams and architecture drawings that need to be read.
// `full` optionally points at a high-resolution original; clicking the figure
// opens it in a lightbox with a download link.
const imageEntry = z.union([
  z.string(),
  z.object({
    src:          z.string(),
    captionTitle: z.string().optional(), // short subtitle shown on the "Fig. N" line
    caption:      z.string().optional(), // one-or-two-sentence explanation below it
    full:         z.string().optional(),
  }),
]);

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    // Sub-category within Research — drives which section the item appears under.
    section:  z.enum(['system-engineering', 'simulation', 'ald']),
    status:   z.enum(['published', 'draft', 'coming-soon']).default('draft'),
    summary:  z.string(),
    images:   z.array(imageEntry).max(3).default([]), // up to 3 photos, shown in the detail-page photo strip
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

// NOTE: the former `engineering` collection was merged into `research`.
// Its items now live in src/content/research/ with `section: simulation`.

const development = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    type:    z.enum(['framework', 'productivity', 'dashboard', 'tool']),
    // Same status vocabulary as `research` — coming-soon entries render as
    // unlinked stubs and get no detail page.
    status:  z.enum(['published', 'draft', 'coming-soon']).default('published'),
    summary: z.string(),
    images:  z.array(imageEntry).max(3).default([]),
    // When set, the project card links here (e.g. a GitHub repo) instead of
    // to a generated detail page.
    externalUrl: z.string().url().optional(),
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
    type:       z.enum(['poster', 'oral', 'invited']).optional(),
    status:     z.enum(['scheduled', 'presented']).optional(),
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

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title:     z.string(),
    status:    z.enum(['submitted', 'draft', 'in-preparation', 'under-review', 'published']),
    target:    z.string().optional(),
    summary:   z.string(),
    date:      z.string().optional(),
    coauthors: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'research':                   research,
  'development':                development,
  'recognition-awards':         recognitionAwards,
  'recognition-certifications': recognitionCertifications,
  'recognition-presentations':  recognitionPresentations,
  'recognition-activities':     recognitionActivities,
  'news':                       news,
  'publications':               publications,
};

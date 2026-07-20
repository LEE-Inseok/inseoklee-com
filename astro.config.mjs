import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://inseoklee.com',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    react(),
    icon(),
  ],

  output: "hybrid",
  adapter: cloudflare()
});
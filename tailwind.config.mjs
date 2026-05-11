/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Black Frame design tokens
        'bg-base':   '#0A0A0A',
        'bg-warm':   '#0B0908',
        'bg-cool':   '#08090B',
        'bg-cyan':   '#080A0A',
        surface:     '#111111',
        border:      '#1F1F1F',
        ink:         '#FFFFFF',
        body:        '#E5E5E5',
        muted:       '#666666',
        accent:      '#00E5FF',
        critical:    '#EF4444',
      },
      fontFamily: {
        sans:  ['Geist', 'Pretendard', 'system-ui', 'sans-serif'],
        mono:  ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0',
        none:    '0',
      },
      letterSpacing: {
        tight: '-0.02em',
      },
      fontSize: {
        'display-xl': ['9rem',  { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['7.5rem',{ lineHeight: '1', letterSpacing: '-0.02em' }],
        'display':    ['4.5rem',{ lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section':    ['3rem',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};

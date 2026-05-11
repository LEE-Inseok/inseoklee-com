/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light Frame design tokens
        'bg-base':   '#FAFAFA',
        'bg-warm':   '#FAF8F4',
        'bg-cool':   '#F4F7FA',
        'bg-cyan':   '#F4FAFA',
        surface:     '#F2F2F2',
        border:      '#D4D4D4',
        ink:         '#0A0A0A',
        body:        '#262626',
        muted:       '#525252',
        accent:      '#0891B2',
        critical:    '#DC2626',
      },
      fontFamily: {
        sans:  ['"Times New Roman"', 'Times', 'Pretendard', 'serif'],
        mono:  ['Geist', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        // Override defaults — never use 'thin' or 'extralight'
        normal:   '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
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

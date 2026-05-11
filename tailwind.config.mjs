/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Clean White design tokens — white + black + gray + cyan
        'bg-base':   '#FFFFFF',
        'bg-warm':   '#FAFAFA',
        'bg-cool':   '#F5F7FA',
        'bg-cyan':   '#F0F8FA',
        surface:     '#F5F5F5',
        border:      '#E5E5E5',
        ink:         '#0A0A0A',
        body:        '#1F1F1F',
        muted:       '#6B6B6B',
        accent:      '#06B6D4',
        'accent-dk': '#0891B2',
        critical:    '#DC2626',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['"Inter Tight"', 'Pretendard', 'system-ui', 'sans-serif'],
        mono:  ['"Inter Tight"', 'Pretendard', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal:   '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
        black:    '900',
      },
      borderRadius: {
        DEFAULT: '0',
        none:    '0',
      },
      letterSpacing: {
        tight: '-0.02em',
      },
      fontSize: {
        'display-xl': ['9rem',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['7.5rem',{ lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display':    ['4.5rem',{ lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'section':    ['3rem',  { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Monochrome base (dark) — must mirror the CSS variables in globals.css.
        // These are static fallbacks for Tailwind utilities; the live source of
        // truth for anything section-aware is the --sec CSS variable.
        'bg-base':  '#0A0A0A',
        'bg-raise': '#101010',
        surface:    '#161616',
        border:     '#2A2A2A',
        ink:        '#F5F5F5',
        body:       '#D4D4D4',
        muted:      '#8A8A8A',
        critical:   '#EF4444',

        // Section identity accents
        research:    '#12ADC7', // cyan
        engineering: '#E0A400', // amber
        development: '#DB4F94', // pink
        recognition: '#2EA96A', // green

        // Accent utilities resolve to the active section accent at runtime.
        accent:      'var(--sec)',
        'accent-dk': 'var(--sec-dk)',
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

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm Paper design tokens — adhamdannaway-inspired
        'bg-base':   '#F0EBE0',   // warm cream
        'bg-warm':   '#EFE9DC',
        'bg-cool':   '#ECE8DE',
        'bg-cyan':   '#EBE6DA',
        surface:     '#E8E2D4',
        border:      '#D9D2C5',
        ink:         '#1A1A1A',
        body:        '#3D3633',   // warm dark
        muted:       '#7A7165',   // warm gray
        accent:      '#E8B547',   // mustard yellow
        critical:    '#C73E3E',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['"Inter Tight"', 'Pretendard', 'system-ui', 'sans-serif'],
        mono:  ['"Space Mono"', 'ui-monospace', 'monospace'],
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

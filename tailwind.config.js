/**
 * Kinala UI — Tailwind theme (kept in sync with kinala-dashboard-concept.html CDN config).
 * Copy into your app or merge `theme.extend`. UI reference (dev-first): kinala-ui-foundations.html.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './index.html',
    './kinala-dashboard-concept.html',
    './kinala-ui-foundations.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Material Symbols: 16 / 24 / 36 / 48 — pair with Google Fonts + .material-symbols-outlined (see foundations).
      fontSize: {
        'icon-sm': ['16px', { lineHeight: '1' }],
        'icon-md': ['24px', { lineHeight: '1' }],
        'icon-lg': ['36px', { lineHeight: '1' }],
        'icon-xl': ['48px', { lineHeight: '1' }],
      },
      // Pair font-sans + tracking-sans and font-serif + tracking-serif (not bound automatically).
      letterSpacing: {
        sans: 'normal',
        serif: '-0.02em',
      },
      colors: {
        cream: '#FBF8F3',
        surface: '#FFFFFF',
        'sidebar-tint': '#F5F2ED',
        ink: '#1A1715',
        muted: '#5A4F44',
        'icon-fg': '#9C918B',
        rust: '#B45A32',
        'rust-deep': '#7D3A20',
        gold: '#C9A14D',
        'gold-soft': '#D9BC73',
        'gold-dim': 'rgba(201,161,77,0.35)',
        line: '#E8DFD2',
        'line-strong': '#D6C9B8',
        wash: '#F5EFE6',
        blush: '#F8EEE9',
        panel: '#1A1715',
        'panel-muted': '#978976',
        'panel-line': 'rgba(232,223,210,0.12)',
        // Semantic — use for inline links, focus, validation (WCAG AA on cream / panel when paired as documented in kinala-ui-foundations.html).
        link: '#7D3A20',
        'link-hover': '#5C2A18',
        'link-inverse': '#D9BC73',
        'link-inverse-hover': '#F5EFE6',
        'focus-ring': '#B45A32',
        danger: '#B33A2C',
        'danger-soft': 'rgba(179,58,44,0.14)',
      },
      boxShadow: {
        card: '0 0.375em 1.375em rgba(26,23,21,0.07)',
        lift: '0 0.625em 2.25em rgba(26,23,21,0.09)',
        inset: 'inset 0 0.0625em 0 rgba(255,255,255,0.06)',
        'danger-soft': '0 0 0 3px rgba(179,58,44,0.14)',
      },
    },
  },
  plugins: [],
};

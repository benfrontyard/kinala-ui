/**
 * Kinala UI — Tailwind theme (matches kinala-dashboard-concept.html).
 * Copy this file into your app or merge `theme.extend` into your existing config.
 * Set `content` to your template/source paths (required for class detection).
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Pair font-sans + tracking-sans and font-serif + tracking-serif (not bound automatically).
      letterSpacing: {
        sans: 'normal',
        serif: '-1.5px',
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
      },
      boxShadow: {
        card: '0 6px 22px rgba(26,23,21,0.07)',
        lift: '0 10px 36px rgba(26,23,21,0.09)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
};

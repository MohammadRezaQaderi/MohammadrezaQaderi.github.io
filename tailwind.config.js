/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          muted: '#8b949e',
          text: '#c9d1d9',
          go: '#00add8',
          python: '#ffd43b',
          accent: '#58a6ff',
          success: '#3fb950',
          warn: '#d29922',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'boot-line': 'bootLine 0.15s ease-out forwards',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        fadeIn: { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        bootLine: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      boxShadow: {
        'terminal': '0 0 0 1px rgba(48, 54, 61, 0.5), 0 8px 24px rgba(0,0,0,0.4)',
        'neon-go': '0 0 20px rgba(0, 173, 216, 0.3)',
        'neon-python': '0 0 20px rgba(255, 212, 59, 0.25)',
      },
    },
  },
  plugins: [],
}

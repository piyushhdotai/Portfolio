/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nocturne: {
          base: '#0B0F17',
          surface: '#131A24',
          elevated: '#1B2533',
          text: '#E5E9F0',
          muted: '#9AA5B1',
          accent: '#67E8F9',
          'accent-hover': '#22D3EE',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Geist Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

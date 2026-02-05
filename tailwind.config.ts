import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        unam: {
          blue: '#1b3d70',
          gold: '#bb8800',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef9e7',
          100: '#fdefc4',
          200: '#fbdf8c',
          300: '#f9c856',
          400: '#f7b230',
          500: '#f59e0b', // اللون الرئيسي (ذهبي/عنابي)
          600: '#d97f06',
          700: '#b45c09',
          800: '#92480e',
          900: '#783c0f',
        },
        secondary: {
          50: '#f5f3f0',
          100: '#e8e2d9',
          200: '#d2c5b5',
          300: '#bca58f',
          400: '#a58569',
          500: '#8e6747', // لون ثانوي (بني فاتح)
          600: '#745439',
          700: '#5b422c',
          800: '#42311f',
          900: '#2a1f13',
        },
      },
    },
  },
  plugins: [],
}

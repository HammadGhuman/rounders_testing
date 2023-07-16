/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        'mustard' : '#E7A41F',
        'custom-red': '#DA1F35',
        'custom-black' : '#0A0A0A',
        'charcoal' : '#272727'
      },
      backgroundImage: {
        'footer-bg' : "url('/mask-group1@2x.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },fontFamily:{
        Hevojniwal: ["Hevojniwal", "cursive"],
        MetropolisRegular : ["Metropolis-Regular","cursive"]
      }
    },
  },
  plugins: [],
}

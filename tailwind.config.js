/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/pages/**/*.{js,jsx,ts,tsx}",
  //   "./src/components/**/*.{js,jsx,ts,tsx}",
  //   "./index.html"
  // ],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'main':'#e60012',
        'hero-bg': '#1f2937',
        'copyright-bg':'#242424',
        'copyright-address':'#d0d0d0',
        'copyright-links':'#ffffff',
        'footer-bg': '#242424',
        'footer-text': '#e5e7eb',
        'hero-title': '#f9faf8',
        'hero-secondary': '#e5e7eb',
        'hero-logo': '#f9faf8',
        'testimonial': '#e5e7eb',
        'test-text': '#1f2937',
        'signup': '#3882f6',
      },
      fontSize:{
        logo: '24px',
        title: '48px',
        'hero-desc': '18px',
        'sub-heading': '36px',
        'test-size': '36px',
      },
      lineHeight:{
        title: '64px',
        description: '27px',
        testimonial: '48px',
      },
    },
  },
  plugins: [],
}


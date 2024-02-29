/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-imageHome': "url('/resources/assets/home/desktop/image-hero.jpg')",
        'hero-imageHomeMb': "url('/resources/assets/home/mobile/image-header.jpg')",
        'hero-imageHomeTb': "url('/resources/assets/home/tablet/image-header.jpg')",
        'zx7-Speaker': "url('/resources/assets/home/desktop/image-speaker-zx7.jpg')",
        'zx7-SpeakerMb': "url('/resources/assets/home/mobile/image-speaker-zx7.jpg')",
        'zx7-SpeakerTb': "url('/resources/assets/home/tablet/image-speaker-zx7.jpg')",
        'pattern-Circles': "url('/resources/assets/home/desktop/pattern-circles.svg')",
      },
      fontFamily: {
        'poppins': ['Poppins',],
      },
    },
  },
  plugins: [],
}


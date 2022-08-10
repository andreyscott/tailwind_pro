module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    backgroundImage: {
      'hero': "url('/src/img/cat.jpg')",
      // 'footer-texture': "url('/img/footer-texture.png')",
    },
      colors: {
        wblue: '#5e1fff',
        wred: '#ff1e1e',
        wgreen: '#00ff00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
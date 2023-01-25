/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'map': "url('/images/map.png')",
      },
      fontFamily: {
        'mono': ['Inconsolata', 'monospace']
      }
    },
  },
  plugins: [
  ],
}

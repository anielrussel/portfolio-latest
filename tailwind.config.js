/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('/src/assets/bg-main.png')",
        'html': "url('/src/assets/html.png')",
        'css': "url('/src/assets/css.png')",
        'javascript': "url('/src/assets/javascript.png')",
        'react': "url('/src/assets/react.png')",
        'node': "url('/src/assets/node.png')",
      },
      fontFamily: {
        "Grotesk": "var(--font-family1)",
        "Oswald": "var(--font-family2)"
      }
    },
  },
  plugins: [],
}


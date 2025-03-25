/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Adminkit.jsx",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',  // Custom extra small screens
        'sm': '640px',  // Small devices (default)
        'md': '768px',  // Medium devices (default)
        'lg': '1024px', // Large devices (default)
        'xl': '1280px', // Extra large devices (default)
        '2xl': '1536px', // 2X large screens (default)
      },
    },
  },
  plugins: [],
}


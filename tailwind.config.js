/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        GrayishBlue : "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)"
      }
    },
  },
  plugins: [],
}

// 
// - 
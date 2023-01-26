/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "600px",
    },
    extend: {
      backgroundImage: {
        mobile: "url('/src/assets/images/image-product-mobile.jpg')",
      },
      colors: {
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlueOne: "hsl(211, 68%, 94%)",
        lightGrayishBlueTwos: "hsl(205, 33%, 90%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)",
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};

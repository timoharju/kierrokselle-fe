/* eslint-disable no-undef */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        VT323: "'VT323', monospace"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
  variants: {
    scrollbar: ["rounded"]
  },
}
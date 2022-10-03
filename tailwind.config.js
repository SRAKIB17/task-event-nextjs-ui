/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',

      'md': '960px',

      'lg': '1512px',

    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#240D57",
          secondary: "#501FC1",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],

}

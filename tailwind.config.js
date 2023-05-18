/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Lato: "'Lato', sans-serif",
         },
         colors: {
            golden: "#BD8448",
            goldenrod: "#BD8448",
         },
      },
   },
   plugins: [require("daisyui")],
};

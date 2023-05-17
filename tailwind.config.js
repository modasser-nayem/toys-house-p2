/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Lato: "'Lato', sans-serif",
         },
         colors: {
            "vivid-blue": "#2874F0",
         },
      },
   },
   plugins: [require("daisyui")],
};

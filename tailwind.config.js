/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdefe4",
        "blush": "#e6c5bf",
        "taupe": "#6d6869",
        "green": "#93a197",
        "teal-light": "#64959b",
        "teal-dark": "#107980",
        "gray": "#6c7a85",
      },
    },
  },
  plugins: [],
}

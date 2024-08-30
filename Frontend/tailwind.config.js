/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient":
          "linear-gradient(99.46deg, #380d2c 0.87%, #4d173e 0.88%, #2b174d 97.78%)",
        "light-gradient":
          "linear-gradient(99.57deg, #E6B8D9 1%, #C9B8E6 100.1%)",
      },
    },
  },
  plugins: [],
};

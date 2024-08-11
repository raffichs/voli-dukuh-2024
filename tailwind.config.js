/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        book: ["UEFAEuro Book"],
        medium: ["UEFAEuro Medium"],
        heavy: ["UEFAEuro Heavy"],
        eurobold: ["UEFAEuro Bold"],
        extra: ["UEFAEuro ExtraBold"],
      },
    },
  },
  plugins: [],
};

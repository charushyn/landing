/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mobile-s": '319px',
        "mobile-m": '359px',
        "mobile-l": '411px',
        "tablet-m": "767px",
        "tablet-l": '1023px',
        "desktop": '1279px',
      },
      fontFamily: {
        productSans: ['productSans', "sans-serif"]
      },
      backgroundImage: {
        'logo': "url('./img/logo.png')"
      }
    },
  },
  plugins: [],
};

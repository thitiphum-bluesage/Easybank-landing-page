/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "gray-p": "hsl(233,8%,62%)",
        "gray-second": "hsl(220,16%,96%)",
        "gray-head": "hsl(233,26%,24%)",
        // white: "hsl(0, 0%, 100%)",
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
      },
      screens: {
        xs: "0px",
        sm: "500px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "15px",
        screens: {
          sm: "97%",
          md: "95%",
          lg: "95%",
          xl: "95%",
          "2xl": "1320px",
        },
      },
    },
  },
  plugins: [],
};

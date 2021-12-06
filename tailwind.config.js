module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "352px",
      sm: "560px",
      md: "768px", // Tablets
      lg: "1024px", // Laptops
      xl: "1280px",
      "2xl": "1440px", // Large Laptops
      "3xl": "1536px",
    },
    fontSize: {
      "2xs": ".625rem", //10px
      xs: ".75rem", // 12px
      sm: ".875rem", //14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.375rem", // 22px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2.25rem", // 36px
      "5xl": "3.375rem", // 54px
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "rl-red": "#FF1D31",
        "rl-red-gradient":
          "linear-gradient(162.85deg, #FF1C30 50033.95%, #E5173D 61613.56%)",
        "rl-dark-grey": "#393951",
        "rl-blue": "#0061FE",
        "rl-light": "#F4F5F7",
        "rl-pink": "#F7E2ED",
        "rl-red-opacity": "rgba(255, 29, 49, 0.06)",
      },
      boxShadow: {
        xs: "0px 0px 40px rgba(212, 217, 232, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

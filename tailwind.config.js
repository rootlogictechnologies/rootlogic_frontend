module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "352px",
      xsm: "410px",
      sm: "560px",
      smd: "600px",
      md: "768px", // Tablets
      mlg: "930px",
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
      "2.5xl": "1.625rem", // 26px
      "3xl": "1.75rem", // 28px
      "3.5xl": "2.125rem", // 34px
      "4xl": "2.25rem", // 36px
      "5xl": "3.375rem", // 54px
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      margin: {
        19: "72px",
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
      zIndex: {
        5: "5",
      },
      minHeight: {
        "300px": "300px",
        "600px": "600px",
        "650px": "650px",
        "700px": "700px",
      },
      height: {
        18: "74px",
        "135px": "135px",
        "188px": "188px",
        "200px": "200px",
        "242px": "242px",
        "254px": "254px",
        "260px": "260px",
        "278px": "278px",
        "300px": "300px",
        "340px": "340px",
        "350px": "350px",
        "458px": "458px",
        "600px": "600px",
        "615px": "615px",
        "650px": "650px",
        "700px": "700px",
        "60vh": "60vh",
        "80vh": "80vh",
      },
      maxHeight: { "80vh": "80vh" },
      width: {
        0.25: "1px",
        18: "74px",
        "110px": "110px",
        "154px": "154px",
        "200px": "200px",
        "260px": "260px",
        "280px": "280px",
        "300px": "300px",
        "318px": "318px",
        "350px": "350px",
        "445px": "445px",
        "540px": "540px",
      },
      maxWidth: { "300px": "300px", "350px": "350px", "540px": "540px" },
      inset: {
        "88px": "88px",
        "118px": "118px",
        "160px": "160px",
        "230px": "230px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};

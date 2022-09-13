/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      "5xl": "30px",
      "6xl": "50px",
    },
    colors: {
      bg: "#0A142F",
      text: "#FFFFFF",
      hero: "#BE229C",
      leftHero: "#7C3EFF",
      heroButton: "#FFC93E",
      pcolor: "#E0E5F3",
      solback1: "#FFC93E",
      solback2: "#353F5B",
      soldesc: " #E0E5F3",
      servicesback: "#353F5B",
      select: "#FFC93E",
      clientback: "#353F5B",
      clienticonback: "#F3F5F6",
      footer: "#3B435A",
      footertext: "#0A142F",
      category: "#3A425A",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "Ornament 69.png",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        150: "150%",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "70px",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "150px",
    },
    screens: {
      base: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",

      "2xl": "1536px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

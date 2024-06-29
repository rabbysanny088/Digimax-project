/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "992px" },

      md: { max: "768px" },

      sm: { max: "639px" },
    },
    extend: {
      colors: {
        borderColor: "rgb(40 40 40)",
        textColor: "#ff7fc2",
        dropDownbgColor: "#2B2338",
        responsiveBg: "#33373d",
        rounded_color: "#B47CFD",
        cardcolor: "#9B96B0",
        sectionColor: "#0F0520",
        FFFFF: "#FFFFFF2B",
        unlockcolor: "#18023A",
        linecolor: "#0A0316",
        rgbColor: "rgba(0,0,0,.5)",
      },
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        short: "0.2s",
      },
      borderColor: {
        borderFirst_Color: "#b47cfd",
        border_hover_Color: "#ff7fc2",
        FFFFF: "#FFFFFF2B",
      },
      boxShadow: {
        boxShadowCustom: "-25px 0px 20px -10px #ffb07b inset",
        hoverShadowCustom: "0px 5px 30px 0px rgba(255, 255, 255, 0.3)",
        cardbroder: "0px 0px 60px 0px rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "bottom-gradient": "linear-gradient(120deg, #b47cfd 20%, #ff7fc2 60%)",
        "hover-gradient": "linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%)",
        "section-gradient":
          "linear-gradient(180deg, #2B2338 0%, #0A0118 100%);",
        "card-gradient": "linear-gradient(215deg, #2B233880 0%, #2B2338 65%)",
        "timely-gradient":
          "linear-gradient(at top left, #0F0520 0%, #18023A 100%)",
        "responsive-gradient":
          "linear-gradient(135deg,#B47CFD  0%, #18023A 100%)",
        "radial-custom":
          "radial-gradient(at top left, #2B2338 0%, #0A0118 100%)",
      },
      ringColor: {
        FFFFF: "#FFFFFF2B",
      },
    },
  },
  plugins: [],
};

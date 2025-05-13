/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-white": "#fff",
        "gray-100": "#e9eaf0",
        "gray-900": "#1d2026",
        "gray-500": "#8c94a3",
        "primary-500": "#ff6636",
        "secondary-500": "#564ffd",
        "gray-600": "#6e7485",
        "gray-200": "#ced1d9",
        "primary-100": "#ffeee8",
        "gray-700": "#4e5566",
        "error-100": "#fff0f0",
        "error-700": "#882929",
        "secondary-100": "#ebebff",
        "secondary-700": "#342f98",
        "success-100": "#e1f7e3",
        "success-700": "#15711f",
        "warning-100": "#fff2e6",
        "warning-800": "#65390c",
        "gray-50": "#76abae",
        "primary-700": "#993d20",
        "gray-400": "#a1a5b3",
        "gray-800": "#363b47",
        dimgray: "#4f5459",
        darkslategray: "rgba(54, 59, 71, 0.4)",
        teal: "#42787a",
        lavender: "#d1d1e6",
        beige: "#c7dec9",
        "primary-200": "#ffddd1",
        mistyrose: "#e6d4cf",
        "success-500": "#23bd33",
        gray1: {
          "100": "rgba(255, 255, 255, 0.5)",
          "200": "rgba(255, 255, 255, 0.05)",
          "300": "rgba(255, 255, 255, 0.6)",
          "400": "rgba(255, 255, 255, 0.2)",
          "500": "rgba(0, 0, 0, 0.5)",
          "800": "rgba(0, 0, 0, 0.8)",
        },
        "warning-500": "#fd8e1f",
        "secondary-900": "#111033",
        tomato: "#e64d1c",
        "gray-300": "#b7bac7",
        blueviolet: "rgba(86, 79, 253, 0.1)",
        black: "#000",
        royalblue: "#1f55e1",
        crimson: "#e11f1f",
        "error-500": "#e34444",
        gainsboro: "#e6e6e6",
        "success-200": "#c3e5c6",
      },
      spacing: {},
      fontFamily: {
        "body-medium-400": "Inter",
        inherit: "inherit",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        xl: "20px",
        "81xl": "100px",
        "21xl": "40px",
        "61xl": "80px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "3xs": "10px",
      xs: "12px",
      lg: "18px",
      "17xl-8": "36.8px",
      "10xl": "29px",
      "3xl": "22px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      "45xl": "64px",
      "19xl": "38px",
      "29xl": "48px",
      "26xl": "45px",
      "17xl": "36px",
      "8xl": "27px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

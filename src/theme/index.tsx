import { MantineThemeOverride } from "@mantine/core";

const myTheme: MantineThemeOverride = {
  colorScheme: "light" || "dark",
  defaultRadius: "md",
  fontFamily: '"Clash Display", sans-serif',
  colors: {
    purple: ["#C350C0","rgb(123, 31, 162)"],
    dark:[
      '#FFFFFF',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a',
      '#2b2c3d',
      '#000000',
      '#0c0d21',
      '#01010a',
    ],

  },

  other: {
    boxShadow: {
      hoverBtn: `4px 4px 0 0 #C350C0 `,
      hoverImage:`4px 4px 0 0 #505861`
    },
    transition: {
      hoverBtn: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    },
    transform: {
      hoverBtn: "translate(-5px, -5px)",
    },
    gradient:{
      lightPurple: "linear-gradient(90deg, #C350C0 0%, #FFB7D5 100%)",
      darkPurple: "linear-gradient(90deg, #7028E4 0%, #E5B2CA 100%)",
      lightBlue: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
      darkBlue: "linear-gradient(90deg, #1D4350 0%, #A43931 100%)",
      purpleVioletPink: "linear-gradient(to right,rgb(123, 31, 162),rgb(103, 58, 183),rgb(244, 143, 177),rgb(123, 31, 162))"
    }
  },
};

export default myTheme;

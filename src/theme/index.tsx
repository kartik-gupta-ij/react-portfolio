import { MantineThemeOverride } from '@mantine/core';

const myTheme: MantineThemeOverride = {
  colorScheme: 'light'||'dark',
  defaultRadius: "md",
  colors: {

  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: '"Clash Display", sans-serif',
    sizes: {
      h1: { fontSize: '2rem' },
    },
  },
};


export default myTheme;
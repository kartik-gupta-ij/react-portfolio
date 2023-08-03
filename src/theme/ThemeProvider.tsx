import { ReactNode } from "react";
// Mantine
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
// theme
import myTheme from ".";


// -----------------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider(props: Props) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });
  useHotkeys([["shift+J", () => toggleColorScheme()]]);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
//casdisplay
  myTheme.colorScheme=colorScheme;
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={myTheme}
        withNormalizeCSS
        withGlobalStyles
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
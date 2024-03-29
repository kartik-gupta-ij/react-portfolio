import Home from "./pages/Home";
import ThemeProvider from "@/theme/ThemeProvider";
import {
  SpotlightProvider,
  SpotlightAction,
} from "@mantine/spotlight";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { ActionIcon, Group, Text, rem } from "@mantine/core";
const actions: SpotlightAction[] = [
  {
    group: "portfolio",
    title: "Download Resume",
    description: "Keep me for future reference",
    //download resume on click
    onTrigger: () => {
      fetch("Kartik_Gupta.pdf").then((e) => {
        e.blob().then((e) => {
          let t = window.URL.createObjectURL(e),
            r = document.createElement("a");
          (r.href = t), (r.download = "Kartik_Gupta.pdf"), r.click();
        });
      });
    },
    icon: <IconFileText size="1.2rem" />,
  }
];

function ActionsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Group
        position="apart"
        px={15}
        py="xs"
        sx={(theme) => ({
          borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
          }`,
        })}
      >
        <Text size="xs" color="dimmed">
          You can find me on
        </Text>
        <Group spacing={15} position="right" noWrap>
          <ActionIcon
            variant="light"
            color="blue"
            component="a"
            href="https://github.com/kartik-gupta-ij"
            target="_blank"
          >
            <IconBrandGithub size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant="light"
            color="blue"
            component="a"
            href="https://www.linkedin.com/in/kartik-gupta-ij"
            target="_blank"
          >
            <IconBrandLinkedin size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant="light"
            color="blue"
            component="a"
            href="https://twitter.com/kartik_gupta_ij"
            target="_blank"
          >
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </div>
  );
}

function App() {
  return (
    
    <ThemeProvider>
      <SpotlightProvider
        actions={actions}
        searchPlaceholder="Search..."
        shortcut="mod + K"
        searchIcon={<IconSearch size="1.2rem" />}
        nothingFoundMessage="Nothing found..."
        actionsWrapperComponent={ActionsWrapper}
      >
        <Home />
      </SpotlightProvider>
    </ThemeProvider>
  );
}

export default App;

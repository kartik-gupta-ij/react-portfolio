import { useState } from "react";
import {
  createStyles,
  Box,
  Text,
  Group,
  rem,
  Container,
  Grid,
  Title,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;
const LINK_WIDTH = 80;
const INDICATOR_OFFSET_X = (LINK_WIDTH - INDICATOR_SIZE) / 2;


const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: rem(LINK_HEIGHT),
    fontSize: theme.fontSizes.sm,
    height: rem(LINK_HEIGHT),
    borderLeft: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    [theme.fn.smallerThan("sm")]: {
      borderLeft: "none",
      borderTop: `${rem(2)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
      width: rem(LINK_WIDTH),
    },
  },

  linkActive: {
    fontWeight: 500,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
  },

  links: {
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      maxWidth: `calc(100vw - 2* ${theme.spacing.xl})`,
      overflowX: "auto",
    },
    
  },

  indicator: {
    transition: "transform 150ms ease",
    border: `${rem(2)} solid ${
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: rem(INDICATOR_SIZE),
    width: rem(INDICATOR_SIZE),
    borderRadius: rem(INDICATOR_SIZE),
    position: "absolute",
    left: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`,
    [theme.fn.smallerThan("sm")]: {
      left: "auto",
      top: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`,
    },
  },
  container: {
    display: "flex",
    minHeight: "100vh",
    minWidth: "100vw",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: rem(35),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function TableOfContentsFloating() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(2);

  const links = [
    
    {
      Company: "Qdrant",
      link: "#usage",
      Role: "Web Developer Intern",
      Duration: "May 2023 - Present",
      Description: [
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
      ],
    },
    {
      Company: "Qdrant3",
      link: "#usage",
      Role: "Web Developer Intern1",
      Duration: "May 2023 - Present",
      Description: [
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
      ],
    },
    {
      Company: "Qdrant1",
      link: "#usage",
      Role: "Web Developer Intern2",
      Duration: "May 2023 - Present",
      Description: [
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
      ],
    },
    {
      Company: "Qdrant2",
      link: "#usage",
      Role: "Web Developer Intern2",
      Duration: "May 2023 - Present",
      Description: [
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
      ],
    },
  ];

  const items = links.map((item, index) => (
    <Box<"a">
      onClick={() => {
        setActive(index);
      }}
      key={item.Company}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      sx={(theme) => ({
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
      })}
    >
      {item.Company}
    </Box>
  ));

  return (
    <Box className={classes.container}>
      <Container>
        <Grid className={classes.inner}>
          <Grid.Col sm={12}>
            <Title className={classes.title}>Where I’ve Worked</Title>
          </Grid.Col>
          <Grid.Col sm={2}>
            <div className={classes.links}>
              <Box
                className={classes.indicator}
                sx={(theme) => ({
                  transform: `translateY(${
                    active * LINK_HEIGHT + INDICATOR_OFFSET
                  }px)`,
                  [theme.fn.smallerThan("sm")]: {
                    transform: `translateX(${
                      active * LINK_WIDTH + INDICATOR_OFFSET_X
                    }px)`,
                  },
                })}
              />
              {items}
            </div>
          </Grid.Col>
          <Grid.Col sm={10}>
            <Group spacing="xs">
              <Text size="lg" weight={500}>
                {links[active].Role} @ {links[active].Company}
              </Text>
              <Text size="sm" color="dimmed">
                {links[active].Duration}
              </Text>
            </Group>

            <List
              mt={20}
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" variant="outline">
                  <IconChevronRight size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {links[active].Description.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

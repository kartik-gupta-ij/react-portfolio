import {
  Box,
  Container,
  Grid,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import image from "/pablita-man-face.gif";

const useStyles = createStyles((theme) => ({
  container: {
    padding: `calc(${theme.spacing.xl} * 2) 0`,
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
  image: {
    flex: 1,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function About() {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Container>
        <Grid className={classes.inner}>
          <Grid.Col sm={4} className={classes.imageContainer} orderSm={2}>
            <Image src={image} className={classes.image} />
          </Grid.Col>
          <Grid.Col sm={8} orderSm={1}>
            <Title className={classes.title}>About Me</Title>
            <Text mt={10}>
              From a pursuit of Electronics and Communication Engineering at the
              University of Lucknow, I ventured into the realm of coding,
              mastering languages like C++, Python, and JavaScript. This journey
              led me to embrace web development, working with ReactJS,
              ExpressJS, and more, ultimately shaping my path in the tech world.
            </Text>
            <Text mt={10}>
              Proficient in C++, Python, and JavaScript, I've harnessed the
              power of frameworks like ReactJS and ExpressJS. With a knack for
              databases like MySQL and MongoDB, and wielding tools like Git and
              VS Code, I've crafted a toolkit to bring ideas to digital life.
            </Text>
            <Text mt={10}>
              As a dedicated Google Summer of Code student developer, I'm
              building an intuitive web interface for Qdrant, enabling
              accessible data visualization and exploration. This dynamic
              experience allows me to innovate at the crossroads of technology
              and user-centric design, growing not just as a developer, but as a
              visionary in the tech landscape.
            </Text>
            <Text mt={10}>
              Here are a few technologies I've been working with recently:
            </Text>
            <Grid>
              <Grid.Col span={6} sm={4}>
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
                  <List.Item>JavaScript (ES6+)</List.Item>
                  <List.Item>React</List.Item>
                  <List.Item>TypeScript</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={6} sm={8}>
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
                  <List.Item>Python</List.Item>
                  <List.Item>C++</List.Item>
                  <List.Item>Vector Database</List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

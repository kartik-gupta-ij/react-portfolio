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
        <Grid className={classes.inner} >
          <Grid.Col sm={4} className={classes.imageContainer} orderSm={2}>
            <Image src={image} className={classes.image}/>
          </Grid.Col>
          <Grid.Col sm={8} orderSm={1}>
            <Title className={classes.title}>About Me</Title>
            <Text mt={10}>
              Hello! My name is Kartik and I enjoy creating things that live on
              the internet. My interest in web development started back in 2018
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </Text>
            <Text mt={10}>
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </Text>
            <Text mt={10}>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </Text>
            <Text mt={10}>
              Here are a few technologies I've been working with recently:
            </Text>
            <Grid>
              <Grid.Col  span={6} sm={4}>
                <List
                  mt={20}
                  spacing="xs"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl" variant='outline'>
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
                    <ThemeIcon size={20} radius="xl" variant='outline'>
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

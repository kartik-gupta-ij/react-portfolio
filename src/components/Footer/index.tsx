import {
  createStyles,
  Container,
  Title,
  Button,
  Text,
  rem,
  Grid,
  clsx,
} from "@mantine/core";
import Tilt from "react-parallax-tilt";

import imgTree from "/pablita-delivery.gif";

const useStyles = createStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
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
    textAlign: "center",
    alignItems: "center",
  },
  imageContainer: {
    transform: "translateZ(40px) scale(0.8)",
    width: "100%",
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

  control: {
    // [theme.fn.smallerThan("xs")]: {
    //   flex: 1,
    // },
    transition: theme.other.transition.hoverBtn,
    "&:hover": {
      boxShadow: theme.other.boxShadow.hoverBtn,
      transform: theme.other.transform.hoverBtn,
    },
  },

  parallaxEffectImg: {
    transformStyle: "preserve-3d",
    transform: " perspective(1000px)",
    backgroundImage: "url('./urban-line-london-background-line.gif')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  innerElement: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontzsize: "35px",
    fontStyle: "italic",
    color: "white",
    transform: "translateZ(60px)",
  },
  highlightBlue: {
    backgroundImage:
      theme.colorScheme === "dark"
        ? theme.other.gradient.lightBlue
        : theme.other.gradient.DarkBlue,
    color: theme.colorScheme === "dark" ? theme.black : theme.white,
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid className={classes.inner}>
          <Grid.Col sm={7} orderSm={2} className={classes.imageContainer}>
            <Tilt
              className={classes.parallaxEffectImg}
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              perspective={800}
              transitionSpeed={3000}
              scale={1.1}
              gyroscope={true}
            >
              <div className={classes.innerElement}>
                <img
                  src={imgTree}
                  className={classes.imageContainer}
                  alt="pic"
                />
              </div>
            </Tilt>
          </Grid.Col>
          <Grid.Col sm={5} orderSm={1}>
            <Title className={classes.title}>Get in touch</Title>

            <Text mt="md">
              I love doing different projects. Like if you come back to this
              page after 6 months, you'll see a new project here. I'm always
              open for new opportunities. If you have a project in mind, feel
              free to contact me.
            </Text>

            <Button
              radius="md"
              size="lg"
              mt={20}
              className={clsx([classes.highlightBlue, classes.control])}
              onClick={() => {
                window.location.href = "mailto:kartikgupta7267@gmail.com";
              }}
              variant="gradient"
            >
              Email Me
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

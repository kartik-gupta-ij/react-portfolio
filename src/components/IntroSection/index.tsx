import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Anchor,
  Grid,
  Code,
  clsx,
  keyframes,
} from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import image from "/pablita-social-network-1.gif";
import { spotlight } from "@mantine/spotlight";
import { useEffect, useRef } from "react";

// keyframes background-pan {
//   from {
//     background-position: 0% center;
//   }

//   to {
//     background-position: -200% center;
//   }
// }

// @keyframes scale {
//   from, to {
//     transform: scale(0);
//   }

//   50% {
//     transform: scale(1);
//   }
// }

// @keyframes rotate {
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(180deg);
//   }
// }

const backgroundPan = keyframes({
  from: {
    backgroundPosition: "0% center",
  },
  to: {
    backgroundPosition: "-200% center",
  },
});

const scale = keyframes({
  "from,to": {
    transform: "scale(0)",
  },
  "50%": {
    transform: "scale(1)",
  },
});

const rotate180 = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(180deg)",
  },
});

const useStyles = createStyles((theme) => ({
  container:{
      minWidth:"100vw"
      ,minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
    transition: theme.other.transition.hoverBtn,
    "&:hover": {
      boxShadow: theme.other.boxShadow.hoverBtn,
      transform: theme.other.transform.hoverBtn,
    },
  },

  image: {
    flex: 1,
  },
  highlightPurple: {
    backgroundImage:
      theme.colorScheme === "dark"
        ? theme.other.gradient.lightPurple
        : theme.other.gradient.darkPurple,
  },
  highlightBlue: {
    backgroundImage:
      theme.colorScheme === "dark"
        ? theme.other.gradient.lightBlue
        : theme.other.gradient.DarkBlue,
    color: theme.colorScheme === "dark" ? theme.black : theme.white,
  },
  magic: {
    display: "inline-block",
    position: "relative",
  },

  magicStar: {
    "--size": "clamp(20px, 1.5vw, 30px)",

    animation: `${scale} 700ms ease forwards`,
    display: "block",
    height: "var(--size)",
    left: "var(--star-left)",
    position: "absolute",
    top: "var(--star-top)",
    width: " var(--size)",
    "& svg": {
      animation: `${rotate180} 1000ms linear infinite`,
      display: "block",
      opacity: "0.7",
      "& path": {
        fill: theme.colors.purple[1],
      },
    },
  },
  magicText: {
    animation: `${backgroundPan} 3s linear infinite`,
    background: theme.other.gradient.purpleVioletPink,
    backgroundSize: "200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap",
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  const { magic, magicStar, magicText } = classes;
  const starSpan=useRef(null);

  let index = 0,
    interval = 1000;

  const rand = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const animate = (star:any) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };



  useEffect(
    () => {
        const sumref = starSpan.current as any;
        const sumDivs = starSpan.current 

            ? [...sumref.querySelectorAll(':scope > .mantine-2fvuju') ]
            : []

            for (const star of sumDivs) {
              setTimeout(() => {
                animate(star);
          
                setInterval(() => animate(star), 1000);
              }, index++ * (interval / 3));
            }
    },[]
)
  return (
    <div className={classes.container}>
      <Container>
        <Grid className={classes.inner}>
          <Grid.Col sm={5} orderSm={2} className={classes.imageContainer}>
            <Image src={image} className={classes.image} />
          </Grid.Col>
          <Grid.Col sm={7} orderSm={1}>
            <Text>Hi, There 👋 I’m</Text>
            <Title className={classes.title}>
              <Text>
                <span className={magic} ref={starSpan}>
                  <span className={magicStar}>
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span className={magicStar}>
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span className={magicStar}>
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                  </span>
                  <span className={magicText}>Kartik Gupta</span>
                </span>
              </Text>
              I build things for the
              <Text
                className={classes.highlightBlue}
                variant="gradient"
                pl={4}
                display={"inline"}
              >
                Web.
              </Text>
            </Title>
            <Text mt="md" >
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at{" "}
              <Anchor href="https://qdrant.tech/" target="_blank">
                Qdrant
              </Anchor>
              .
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon
                  size={20}
                  radius="xl"
                  variant="gradient"
                  className={classes.highlightPurple}
                >
                  <IconStarFilled size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
              sx={{"& .mantine-List-itemWrapper":{
               
                alignItems: "center !important",
         
              }
            
              }}
            >
              <List.Item>
                <b>Web Devloper at Qdrant</b>
              </List.Item>
              <List.Item>
                <b>Member at Coding Club</b>
              </List.Item>
              <List.Item>
                <b>Student at Unversity of Lucknow</b>
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="md"
                size="lg"
                className={clsx([classes.highlightBlue, classes.control])}
                onClick={() => spotlight.open()}
                variant="gradient"
              >
                Discover Works
              </Button>
            </Group>
            <Text color="dimmed" mt="md">
              Or press <Code>⌘</Code>/<Code> Ctrl + K</Code> to discover more
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

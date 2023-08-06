import {
  createStyles,
  Text,
  Group,
  rem,
  Box,
  Container,
  Grid,
  Title,
  Badge,
  ActionIcon,
} from "@mantine/core";
import SanMargImage from "/SanMarg.png";
import {
  IconArticle,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    padding: `calc(${theme.spacing.xl} * 2) 0`,
  },
  inner: {
    display: "flex",
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
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },
  projectTitle: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: rem(30),
    lineHeight: 1.2,
    fontWeight: 800,
    paddingBottom: "20px",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign:"left"
    },
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    background: `url("./SanMarg.png") no-repeat center center`,
    backgroundSize:
      "cover" /* for IE9+, Safari 4.1+, Chrome 3.0+, Firefox 3.6+ */,
    " -webkit-background-size":
      "cover" /* for Safari 3.0 - 4.0 , Chrome 1.0 - 3.0 */,
    MozBackgroundSize: "cover" /* optional for Firefox 3.6 */,
    " -o-background-size": "cover" /* for Opera 9.5 */,
    margin: 0 /* to remove the default white margin of body */,
    padding: 0 /* to remove the default white margin of body */,
    overflow: "hidden",
    zIndex: -1,
  },
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  descrtionContainer: {
    backgroundColor: "rgba(17, 34, 64, 0.9)",
    padding: "20px",
    borderRadius: "10px",
    position: "relative",
    zIndex: -1,
  },
  badgeBox: {
    paddingTop: "10px",
    [theme.fn.smallerThan("sm")]: {
    justifyContent:"flex-start",

    },
  },
  link: {
    paddingTop: "10px",
    [theme.fn.smallerThan("sm")]: {
      justifyContent:"flex-start",
      },
  },
  marginContainer: {
    [theme.fn.smallerThan("sm")]: {
      margin: 0,
    },
  },
}));

export default function Project() {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Title className={classes.title}>Some Things I’ve Built</Title>
        {Projects.map((project, index) => (
          <Grid className={classes.inner} key={project.name}>
            <Grid.Col
              sm={8}
              className={classes.centerContainer}
              order={index % 2 ? 2 : 1}
              sx={(theme) => ({
                [theme.fn.smallerThan("sm")]: {
                  display: "none",
                },
              })}
            >
              <Box className={classes.image}></Box>
            </Grid.Col>
            <Grid.Col
              sm={4}
              className={classes.centerContainer}
              order={index % 2 ? 1 : 2}
            >
              <Title
                className={classes.projectTitle}
                sx={index % 2 ? { textAlign: "left" } : { textAlign: "right" }}
              >
                {project.name}
              </Title>
              <Box
                className={classes.marginContainer}
                sx={
                  index % 2
                    ? { marginRight: `-${rem(250)}` }
                    : { marginLeft: `-${rem(250)}` }
                }
              >
                <Box 
                className={classes.descrtionContainer}
                sx={(theme) => ({
                  [theme.fn.smallerThan("sm")]: {
                    "&: before" :{
                      content: "''",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      opacity: .2,
                      zIndex: -2,
                      background: `url(${project.image}) no-repeat center center`,
                      backgroundSize:"cover"
                    }
                  },
                })}
                >
                  {project.description.map((desc) => (
                    <Text mt={5} key={desc} color="white">
                      {desc}
                    </Text>
                  ))}
                </Box>
                <Group
                  spacing={15}
                  className={classes.badgeBox}
                  position={index % 2 ? "left" : "right"}
                  noWrap
                >
                  {project.badges.map((badge) => (
                    <Badge
                      variant="gradient"
                      gradient={{ from: "indigo", to: "cyan" }}
                      key={badge}
                    >
                      <Text>{badge}</Text>
                    </Badge>
                  ))}
                </Group>
                <Group
                  spacing={15}
                  className={classes.link}
                  position={index % 2 ? "left" : "right"}
                  noWrap
                >
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
                    <IconArticle size="1.1rem" stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon
                    variant="light"
                    color="blue"
                    component="a"
                    href="https://twitter.com/kartik_gupta_ij"
                    target="_blank"
                  >
                    <IconExternalLink size="1.1rem" stroke={1.5} />
                  </ActionIcon>
                </Group>
              </Box>
            </Grid.Col>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}

const Projects = [
  {
    image: SanMargImage,

    name: "SanMarg",
    description: [
      "SanMarg is a non-profit organization that aims to provide education to underprivileged children. I worked on the website of the organization and made it more user friendly and responsive. I also added a payment gateway to the website to make it easier for people to donate to the organization. ",
      "I also worked on the backend of the website and made it more secure and efficient. I also added a feature to the website that allows the admin to add new events and news to the website. I also added a feature that allows the admin to add new members to the website.",
      "I h also worked on the backend of the website and made it more secure and efficient. I also added a feature to the website that allows the admin to add new events and news to the website. I also added a feature that allows the admin to add new members to the website.",
    ],
    badges: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/kartik-gupta-ij/SanMarg",
      external: "https://sanmarg.onrender.com/",
      blog: "https://kartik-gupta-ij.medium.com/sanmarg-website-2d0b0b0b9b1b",
    },
  },
  {
    image: SanMargImage,
    name: "SanMarg2",
    description: [
      "SanMarg is a non-profit organization that aims to provide education to underprivileged children. I worked on the website of the organization and made it more user friendly and responsive. I also added a payment gateway to the website to make it easier for people to donate to the organization. ",
      "I also worked on the backend of the website and made it more secure and efficient. I also added a feature to the website that allows the admin to add new events and news to the website. I also added a feature that allows the admin to add new members to the website.",
      "I j also worked on the backend of the website and made it more secure and efficient. I also added a feature to the website that allows the admin to add new events and news to the website. I also added a feature that allows the admin to add new members to the website.",
    ],
    badges: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
    links: {
      github: "https://github.com/kartik-gupta-ij/SanMarg",
      external: "https://sanmarg.onrender.com/",
      blog: "https://kartik-gupta-ij.medium.com/sanmarg-website-2d0b0b0b9b1b",
    },
  },
];

import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  UnstyledButton,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    padding: `calc(${theme.spacing.xl} * 2) 0`,
    width: "100%",
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
  card: {
    position: "relative",
    borderRadius: "20px",
    height: "400px",
    width: "100%",
    margin: "10px 0",
    transition: "ease all 2.3s",
    perspective: "1200px",
    "&:hover": {
      [`& .${getStylesRef("cover")}`]: {
       
        transform: "rotateX(0deg) rotateY(-180deg)",
        "&:before": {
          transform: "translateZ(30px)",
        },
        "&:after": {
          backgroundColor: "black",
        },
        // blogTitle
        [`& .${getStylesRef("blogTitle")}`]: {
          transform: "translateZ(100px)",
        },
        // blogDescription
        [`& .${getStylesRef("blogDescription")}`]: {
          transform: "translateZ(60px)",
        },
        [`& .${getStylesRef("cardButton")}`]: {
          transform: "translateZ(-60px) rotatey(-180deg)",
        },
        [`& .${getStylesRef("cardBackText")}`]: {
          transform: "translateZ(-60px) rotatey(-180deg)",
        },
      },
    },
    [`& .${getStylesRef("cover")}`]: {
      position: "absolute",
      borderRadius: "20px",
      height: "100%",
      width: "100%",
      transformStyle: "preserve-3d",
      transition: "ease all 2.3s",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      "&:before": {
        content: "''",
        position: "absolute",
        border: "5px solid rgba(255,255,255,.5)",
        boxShadow: "0 0 12px rgba(0,0,0,.3)",
    borderRadius: "20px",

        top: "20px",
        left: "20px",
        right: "20px",
        bottom: "20px",
        zIndex: 2,
        transition: "ease all 2.3s",
        transformStyle: "preserve-3d",
        transform: "translateZ(0px)",
      },
  
      "&:after": {
        content: "''",
        position: "absolute",
        borderRadius: "20px",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        zIndex: 2,
        transition: "ease all 1.3s",
        background: "rgba(0,0,0,.4)",
      },
  
      [`& .${getStylesRef("blogTitle")}`]: {
        fontWeight: 600,
        position: "absolute",
        bottom: "55px",
        left: "50px",
        color: "white",
        transformStyle: "preserve-3d",
        transition: "ease all 2.3s",
        zIndex: 3,
        fontSize: "3em",
        transform: "translateZ(0px)",
      },
      [`& .${getStylesRef("blogDescription")}`]: {
        fontWeight: 200,
        position: "absolute",
        top: "55px",
        right: "50px",
        color: "white",
        transformStyle: "preserve-3d",
        transition: "ease all 2.3s",
        zIndex: 4,
        fontSize: "2em",
        transform: "translateZ(0px)",
      },
      
    },
    [`& .${getStylesRef("cardBlack")}`]: {
      position: "absolute",
      borderRadius: "20px",
      height: "100%",
      width: "100%",
      background: "#0b0f08",
      transformStyle: "preserve-3d",
      transition: "ease all 2.3s",
      transform: "translateZ(-1px)",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      [`& .${getStylesRef("cardButton")}`]: {
        transformStyle: "preserve-3d",
        transition: "ease transform 2.3s, ease background .5s",
        transform: "translateZ(-1px) rotatey(-180deg)",
        background: "transparent",
        border: "1px solid white",
        fontWeight: 200,
        fontSize: "1.3em",
        color: "white",
        padding: "14px 32px",
        outline: "none",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "white",
          color: "#0b0f08",
        },
      },
      [`& .${getStylesRef("cardBackText")}`]: {
        transformStyle: "preserve-3d",
        transition: "ease transform 2.3s, ease background .5s",
        transform: "translateZ(-1px) rotatey(-180deg)",
        background: "transparent",
      },
    },

  },
  cover: {
    ref: getStylesRef("cover"),
  },

  blogTitle: {
    ref: getStylesRef("blogTitle"),
  },
  blogDescription: {
    ref: getStylesRef("blogDescription"),
  },
  cardBlack: {
    ref: getStylesRef("cardBlack"),
  },
  cardButton: {
    ref: getStylesRef("cardButton"),
  },
  cardBackText: {
    ref: getStylesRef("cardBackText"),
    fontWeight: 200,
    fontSize: ".8em",
    padding: "5px 20px",
  },
}));

export default function Blog() {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Container>
        <Grid className={classes.inner}>
          <Grid.Col xs={12}>
            <Title className={classes.title}> Blogs</Title>
          </Grid.Col >
          {Blogs.map((blog) => (
            <Grid.Col md={4} sm={6} xs={12} key={blog.title} >
              <Box className={classes.card}>
                <Box
                  className={classes.cover}
                  sx={{ backgroundImage: `url(${blog.image})` }}
                >
                  <Text className={classes.blogTitle}>{blog.title}</Text>

                  <Text className={classes.blogDescription}>
                    {blog.description}
                  </Text>
                  <Box className={classes.cardBlack}>
                    {blog.backDescription.map((description) => (
                      <Text className={classes.cardBackText} key={description}>
                        {description}
                      </Text>
                    ))}
                    <UnstyledButton
                      className={classes.cardButton}
                      component="a"
                    >
                      <Text >Read More</Text>
                    </UnstyledButton>
                  </Box>
                </Box>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
const Blogs = [
  {
    title: "GSoC Journey",
    description: "How I got into GSoC?",
    image: "./GSOC.jpeg",
    link: "https://www.google.com",
    backDescription:  [
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation......",
      
    ]
  },
  {
    title: "React Roadmap",
    description: "How to learn React?",
    image: "./SanMarg.png",
    link: "https://www.google.com",
    backDescription:  [
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation......",
      
    ]
  },
  {
    title: "Vector Database",
    description: "What are Vector Databases?",
    image: "./SanMarg.png",
    link: "https://www.google.com",
    backDescription:  [
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation......",  
    ]

  },
];

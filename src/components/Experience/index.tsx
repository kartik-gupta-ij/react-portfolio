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
const LINK_WIDTH = 100;
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
      height: "100%",
      marginTop: theme.spacing.sm,
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
      marginTop: theme.spacing.sm,
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
  const [active, setActive] = useState(0);

  const links = [
    {
      Company: "GSoC'23",
      link: "#usage",
      Role: "Student Developer",
      Duration: "May 2023 - Present",
      Description: [
        "Spearheaded development of a user-friendly web UI for data exploration in Qdrant's vector search engine during Google Summer of Code 2023.",
        "Successfully achieved all six project milestones including Figma UI design, custom language query editor, and vector visualization using dimension reduction techniques.",
        "Overcame challenges like autocomplete integration, web worker optimization, and complex console integration, showcasing adaptability and problem-solving skills.",
        "Acquired expertise in vector reduction techniques, web workers, and UI frameworks while collaborating closely with mentors and the Qdrant community.",
        "Technologies used: React, druidjs, Druid.js, Chart.js, Monaco-editor, Material UI, and more.",
      ],
    },
    {
      Company: "I.W.A.",
      link: "#usage",
      Role: "Freelancer",
      Duration: "April 2022 - Present",
      Description: [
        "I have had the opportunity to work with two clients on different projects. One of the projects involved designing and developing a fully functional static website.",
        "I was also tasked with fixing some issues in a React-based web app for my other client. Through my efforts, I was able to successfully resolve the issues and improve the overall performance of the app.",
        "Generated a total revenue of 62K from two clients.",
        "Technologies used: JavaScript, Html, CSS, React, Material UI, and more.",
      ],
    },
    {
      Company: "HEYCOACH",
      link: "#usage",
      Role: "Full-stack Web Developer Intern",
      Duration: "Oct 2022 - Dec 2022",
      Description: [
        " Developed a feature with CSVReader for processing large Excel data files, enabling detailed report uploads and overviews.",
        "Created a dashboard for direct receipt generation and marketing, providing a comprehensive view of marketing campaigns.",
        "Improved UI/UX by adding video testimonials, fee section, and optimized the website for mobile devices.",
        "Technologies used: React, JavaScript, Redux, Material UI, React-pdf and more.",
      ],
    },
    {
      Company: "WEBSUTILITY",
      link: "#usage",
      Role: "Web Developer Intern",
      Duration: "Sep 2020 – Feb 2021",
      Description: [
        "Designed posters and improved UI/UX for the company’s main website.",
        "Learned website optimization techniques and made a WhatsApp Message sender Chrome extension.",
        "learned about SEO, basic fundamentals of web development, and website optimization techniques.",
        "Also worked as a marketing intern and generated a total revenue of 500K from 4 clients.",
        "Technologies used: JavaScript, Html, CSS, React, Material UI, and more.",
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
              sx={{
                "& .mantine-List-itemWrapper": {
                  alignItems: "center !important",
                },
              }}
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

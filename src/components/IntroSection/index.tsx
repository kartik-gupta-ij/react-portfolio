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
} from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import image from "/pablita-social-network-1.gif";

const useStyles = createStyles((theme) => ({
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

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
  },
  highlight: {},
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <Grid className={classes.inner}>
        <Grid.Col sm={5} orderSm={2}>
            <Image src={image} className={classes.image} />
          </Grid.Col>
          <Grid.Col sm={7} orderSm={1}>
            
              <Text  mt="md">
                Hi, There 👋 I’m
              </Text>
              <Title className={classes.title}>
                <Text
                  variant="gradient"
                  gradient={{ from: "#ec4899", to: "#8b5cf6", deg: 0 }}
                >
                  Kartik Gupta
                </Text>
                I build things for the
                <Text
                  className={classes.highlight}
                  variant="gradient"
                  pl={4}
                  gradient={{ from: "teal", to: "indigo", deg: 45 }}
                  display={"inline"}
                >
                  Web.
                </Text>
              </Title>
              <Text  mt="md">
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible, human-centered
                products at{" "}
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
                    gradient={{ from: "#ec4899", to: "#8b5cf6", deg: 0 }}
                  >
                    <IconStarFilled size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Web Devloper at Qdrant</b>
                </List.Item>
                <List.Item>
                  <b>Member at coding club</b>
                </List.Item>
                <List.Item>
                  <b>Student at Unversity of Lucknow</b>
                </List.Item>
              </List>

              <Group mt={30}>
                <Button  radius="md" size="lg" className={classes.control} variant="gradient" gradient={{ from: "teal", to: "indigo", deg: 45 }}>
                  Discover Works
                </Button>
               
              </Group>
              <Text color="dimmed" mt="md" >
                 Or press <Code>⌘</Code>/<Code> Ctrl + K</Code> to discover more
              </Text>
    
          </Grid.Col>
         
        </Grid>
        <div></div>
      </Container>
    </div>
  );
}

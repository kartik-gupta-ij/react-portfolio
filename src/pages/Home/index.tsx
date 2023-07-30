import { Box, Container, Grid } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { FC } from "react";
import { useHomeStyles } from "./styles";
import Sidebar from "@/components/Sidebar";

const Home: FC = () => {
  useDocumentTitle("Kartik Gupta");
  const { classes } = useHomeStyles();
  const { container ,gridContainer} = classes;
  return (
    <Box className={container}>
      <Container size={"xl"} h={"100%"} >
      <Grid m={0} className={gridContainer}>
          <Grid.Col md={12} lg={3}>
            <Sidebar/>
          </Grid.Col>
          <Grid.Col md={12} lg={9}>
            2
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

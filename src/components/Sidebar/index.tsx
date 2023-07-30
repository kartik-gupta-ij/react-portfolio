import { Box, Grid } from "@mantine/core";
import { FC } from "react";
import { useSideBarStyles } from "./styles";


const Sidebar: FC = () => {

  const { classes } = useSideBarStyles();
  const { container,  } = classes;
  return (
    <Box className={container}>
        <Grid >


        </Grid>
    </Box>
  );
};

export default Sidebar;

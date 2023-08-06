import About from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import HoverAnmiations from "@/components/HoverAnmiations";

import IntroSection from "@/components/IntroSection";
import Project from "@/components/ProjectSection";
import { Box, createStyles } from "@mantine/core";
import { useMouse } from "@mantine/hooks";

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100%",
    minHeight: "100vh",
    minWidth: "100vw",
    objectFit: "cover",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const { ref, x, y } = useMouse();
  return (
    <>
      <HoverAnmiations x={x} y={y} />
      <Box sx={{position:"fixed" ,height:"100vh", width:"100vw",zIndex:0}}ref={ref}></Box>
      <Box className={classes.container} >
        <Box className={classes.innerContainer}  >
          <Header />
          <IntroSection/>
          <About />
          <Experience/>
          <Project />
          <IntroSection />
          <IntroSection />
        </Box>
      </Box>
    </>
  );
}

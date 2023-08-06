import About from "@/components/AboutSection";
import Blog from "@/components/BlogsSection";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import HoverAnmiations from "@/components/HoverAnmiations";

import IntroSection from "@/components/IntroSection";
import Project from "@/components/ProjectSection";
import { Box, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

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
  const [mousePos, setMousePos] = useState({x:0,y:0});

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);
  return (
    <>
      <HoverAnmiations x={mousePos.x} y={mousePos.y} />
      <Box className={classes.container} >
        <Box className={classes.innerContainer}  >
          <Header />
          <IntroSection/>
          <About />
          <Experience/>
          <Project />
          <Blog/>
          <IntroSection />
        </Box>
      </Box>
    </>
  );
}

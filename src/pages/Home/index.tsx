import Header from "@/components/Header";
import HoverAnmiations from "@/components/HoverAnmiations";

import IntroSection from "@/components/IntroSection";
import { Box, createStyles } from "@mantine/core";
import { useMouse } from "@mantine/hooks";

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    backgroundImage:
      "linear-gradient(rgba(79,70,229,.2) 1px,transparent 0),linear-gradient(90deg,rgba(79,70,229,.2) 1px,transparent 0)",
    backgroundSize: "24px 24px",
    zIndex: 4,
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
      <Box sx={{position:"fixed" ,height:"100vh", width:"100vw"}}ref={ref}></Box>
      <Box className={classes.container} >
        <Box className={classes.innerContainer}  >
          <Header />
          <IntroSection/>
          <IntroSection />
          <IntroSection />
          <IntroSection />
        </Box>
      </Box>
      
    </>
  );
}

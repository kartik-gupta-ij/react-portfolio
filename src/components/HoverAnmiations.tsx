import { Box, createStyles, keyframes } from "@mantine/core";
import { useMouse } from "@mantine/hooks";
import {  useEffect, useRef } from "react";

export const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0, -1.875rem, 0)" },
  "70%": { transform: "translate3d(0, -0.9375rem, 0)" },
  "90%": { transform: "translate3d(0, -0.25rem, 0)" },
});

export const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { scale: " 1 1.3" },
  "100%": { transform: "rotate(360deg)" },
});

const useStyles = createStyles((theme) => ({
  Blob: {
    backgroundColor: "white",
    height: "34em",
    aspectRatio: "1",
    position: "fixed",
    left: " 50%",
    top: " 50%",
    translate: " -50% -50%",
    borderRadius: " 50%",
    background:
      theme.colorScheme === "dark"
        ? " linear-gradient(to right, aquamarine, mediumpurple)"
        : " linear-gradient(to right, pink, mediumpurple)",
    animation: `${spin} 20s infinite`,
    opacity: 0.8,
    zIndex: -4,
  },
  blur: {
    width: "100vw",
    zIndex: -1,
    height: "100vh",
    position: "fixed",
    backdropFilter: "blur(12vmax)",
    top: 0,
  },
  postion: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    zIndex: 1,
    },
}));

export default function HoverAnmiations() {
  const { classes } = useStyles();
    const{ ref,x,y}=useMouse();
  const ref2 = useRef(null);

  useEffect(() => {
    console.log("ref2", ref2);
    if (ref2.current) {
      const blob = ref2.current as any;

      blob.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    }
  }, [ref2, x]);

  return (
    <>
    <Box className={classes.postion} ref={ref}>
    </Box>
    <Box className={classes.blur} >

    </Box>
    <div className={classes.Blob} ref={ref2}></div>

    </>
  );
}
// <div className={classes.box} >
//  <div className={classes.blur} ref={ref}>
//     {prop.children}
//   </div>

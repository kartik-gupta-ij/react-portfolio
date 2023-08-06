import { Box, createStyles, keyframes } from "@mantine/core";
import { ReactNode, useEffect, useRef } from "react";

export const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0, -1.875rem, 0)" },
  "70%": { transform: "translate3d(0, -0.9375rem, 0)" },
  "90%": { transform: "translate3d(0, -0.25rem, 0)" },
});

export const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { scale: " 1 1.5" },
  "100%": { transform: "rotate(360deg)" },
});

const useStyles = createStyles((theme) => ({
  Blob: {
    backgroundColor: "white",
    height: "34vmax",
    aspectRatio: "1",
    position: "fixed",
    left: " 50%",
    top: " 50%",
    translate: " -50% -50%",
    borderRadius: " 50%",
    background:
      theme.colorScheme === "dark"
        ? " linear-gradient(to right, aquamarine, mediumpurple)"
        : " linear-gradient(to right, pink, blue)",
    animation: `${spin} 5s infinite`,
    opacity: theme.colorScheme === "dark" ? 0.6 : 0.4,
    zIndex: -3,
  },
  blur: {
    width: "100vw",
    zIndex: -2,
    height: "100vh",
    position: "fixed",
    backdropFilter: "blur(10vmax)",
    top: 0,
  },
}));

export default function HoverAnmiations(prop: {
  children?: ReactNode;
  x: number;
  y: number;
}) {
  const { classes } = useStyles();
  
  const ref2 = useRef(null);

  useEffect(() => {
    if (ref2.current) {
      const blob = ref2.current as any;

      blob.style.left = `${prop.x}px`;
      blob.style.top = `${prop.y}px`;
      blob.style.transition = "all 0.6s ease-out";


      // not working in safari
      // blob.animate(
      //   {
      //     left: `${prop.x}px`,
      //     top: `${prop.y}px`,
      //   },
      //   { duration: 3000, fill: "forwards" }
      // );
    }
  }, [ref2, prop.x]);

  return (
    <>
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

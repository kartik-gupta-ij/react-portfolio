import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";


function NewApp() {
  const routing = useRoutes(routes());

  return <main  >{routing}</main>;
}

export default NewApp;
import React from "react";
import Home from "./pages/Home";


const routes = () => [
  {
    path: "/",
    element: <Home />,
    // children: [
    //   { path: "/console", element: <Console /> },
    //   { path: "/collections", element: <Collections /> },
    //   { path: "/collections/:collectionName", element: <Collection /> },
    // ],
  },
];

export default routes;

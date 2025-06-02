import React from "react";
import { createRoot } from "react-dom/client";
import InitialComponent from "./App";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <InitialComponent />
  </React.StrictMode>
);

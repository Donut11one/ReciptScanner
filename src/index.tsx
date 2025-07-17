import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Import our custom CSS
import "./index.scss";
import { InputTableProvider } from "./context";

const root = createRoot(document.getElementById("app"));

// try add provider here

root.render(
  <React.StrictMode>
    <InputTableProvider>
      <App />
    </InputTableProvider>
  </React.StrictMode>
);

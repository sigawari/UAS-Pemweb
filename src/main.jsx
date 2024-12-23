import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./assets/Main";
import "./assets/index.css"; // Pastikan ini adalah path ke index.css Anda

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

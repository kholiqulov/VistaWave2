import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ---> Components
import App from "./App";

// ---> React i18 library
import "./react-i18next";

// ---> Css
import "./Assets/Css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

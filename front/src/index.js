import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider  theme={theme}>
    <HashRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </HashRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/lato/400.css";
import "@fontsource/raleway/variable-full.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: { body: `'Lato', sans-serif`, heading: `'Raleway', sans-serif` },
  colors: {
    brand: {
      900: "#1a80a4",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

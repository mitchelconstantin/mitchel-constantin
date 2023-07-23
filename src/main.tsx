import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

import { ColorModeScript } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors, config });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

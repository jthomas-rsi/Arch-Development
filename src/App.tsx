import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import customTheme from "./theme/customTheme";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

//state
import { useConfigState } from "../hooks";

import GlobalStyles from "./globals";

const Theme = ({ children }) => {
  const { theme } = useConfigState();
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

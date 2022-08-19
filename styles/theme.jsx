import { ThemeProvider } from "styled-components";

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

//state
import { useMainState } from "../hooks";

import GlobalStyles from "./globals";

const Theme = ({ children }) => {
  const { theme } = useMainState();
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

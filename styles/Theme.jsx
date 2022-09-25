import { ThemeProvider } from "styled-components";

import { light, dark } from "../themes";

//state
import { useMainState } from "../hooks";

import GlobalStyles from "./globals";

const Theme = ({ children }) => {
  const { theme } = useMainState();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

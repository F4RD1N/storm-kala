import React from "react";

import { Container } from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;

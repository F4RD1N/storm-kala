import React from "react";

import { Header, Footer, DrawerMenu, SubHeader } from "../components/layout";
import { Container } from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <DrawerMenu />
      {/* <SubHeader /> */}
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

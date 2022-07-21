import React from "react";
import { Header, Navbar } from '../components'
import { Container } from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Navbar />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;

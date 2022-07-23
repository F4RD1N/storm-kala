import React from "react";
import { Header, Navbar, Footer } from '../components'
import { Container } from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

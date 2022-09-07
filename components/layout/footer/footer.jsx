import React from "react";

//Styled Components
import { Container } from "./footer.style";

//Components
import { Honors, UsefulLinks, About, Trusts, Copyright } from ".";

const Footer = () => {
  return (
    <Container>
      <Honors />
      <UsefulLinks />
      <About />
      <Trusts />
      <Copyright />
    </Container>
  );
};

export default Footer;

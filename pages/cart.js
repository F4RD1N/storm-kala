import React from "react";

//Styled Components
import { Container, Title } from "../components/Cart/Cart.style";
//Components
import { Items } from "../components/Cart";
const cart = () => {
  return (
    <div>
      <Container>
        <Title>سبد خرید شما</Title>
        <Items />
      </Container>
    </div>
  );
};

export default cart;

import React from "react";

//Styled Components
import { Container, Title } from "../../components/Checkout/Cart/Cart.style";
//Components
import { Items, NextButton } from "../../components/Checkout/Cart";
const cart = () => {
  return (
    <div>
      <Container>
        <Title>سبد خرید شما</Title>
        <Items />
      </Container>
        <NextButton />
    </div>
  );
};

export default cart;

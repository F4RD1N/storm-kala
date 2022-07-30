import React from "react";

//Styled Components
import { Container, Title } from "../../components/Checkout/Cart/Cart.style";
//Components
import { Items } from "../../components/Checkout/Cart";
import { NextButton } from "../../components/Checkout";

const cart = () => {
  return (
    <div>
      <Container>
        <Title>سبد خرید شما</Title>
        <Items />
      </Container>
        <NextButton url='/shipping'/>
    </div>
  );
};

export default cart;

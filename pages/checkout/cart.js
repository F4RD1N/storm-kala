import React from "react";
import Head from "next/head";

//Styled Components
import {
  Container,
  Title,
} from "../../components/checkout/cart/cart.style";
//Components
import { Items } from "../../components/checkout/cart";
import { NextButton } from "../../components/checkout";

const Cart = () => {
  return (
    <div>
      <Head>
        <title>سبد خرید</title>
      </Head>
      <Container>
        <Title>سبد خرید شما</Title>
        
          <Items />
      </Container>
      <NextButton url="/shipping" />
    </div>
  );
};

export default Cart;

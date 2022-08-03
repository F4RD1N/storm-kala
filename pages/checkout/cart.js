import React from "react";
import Head from "next/head";

//Styled Components
import {
  Container,
  Title,
  Content,
} from "../../components/Checkout/Cart/Cart.style";
//Components
import { Items } from "../../components/Checkout/Cart";
import { NextButton } from "../../components/Checkout";

const Cart = () => {
  return (
    <div>
      <Head>
        <title>سبد خرید</title>
      </Head>
      <Container>
        <Title>سبد خرید شما</Title>
        <Content>
          <Items />
        </Content>
      </Container>
      <NextButton url="/shipping" />
    </div>
  );
};

export default Cart;

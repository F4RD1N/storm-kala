import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

//Components
import { NextStep, NextButton } from "../../components/Checkout";
import { Address, Order, Details } from "../../components/Checkout/Shipping";
//Styled Components
import {
  Container,
  Content,
  Left,
} from "../../components/Checkout/Shipping/Shipping.style";

//state
import { useCartState } from "../../hooks";
const Shipping = () => {
  const { itemsCounter } = useCartState();
  const router = useRouter();

  //if there is no data in the cart, return to main page
  useEffect(() => {
    if (!itemsCounter) {
      router.replace("/");
    }
  }, []);

  if (!itemsCounter) return;
  return (
    <div>
      <Head>
        <title>نحوه ارسال</title>
      </Head>
      <Container>
        <NextStep status="shipping" />
        <Address />
        <Content>
          <Order />
          <Left>
            <Details />
            <NextButton url="/payment" />
          </Left>
        </Content>
      </Container>
    </div>
  );
};

export default Shipping;

Shipping.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

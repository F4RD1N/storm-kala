import React from "react";
import Head from "next/head";

//Components
import { NextStep, NextButton } from "../../components/Checkout";
import { Address, Order, Details } from "../../components/Checkout/Shipping";
//Styled Components
import { Container } from "../../components/Checkout/Shipping/Shipping.style";
const shipping = () => {
  return (
    <div>
      <Head>
        <title>نحوه ارسال</title>
      </Head>
      <Container>
        <NextStep status="shipping" />
        <Address />
        <Order />
        <Details />
        <NextButton url="/payment" />
      </Container>
    </div>
  );
};

export default shipping;

shipping.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

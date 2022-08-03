import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

//Styled Components
import { Container } from "../../components/Checkout/Payment/Payment.style";
import { Content, Left } from "../../components/Checkout/Shipping/Shipping.style";

//Components
import { NextStep, NextButton } from "../../components/Checkout";
import { PaymentMethod, Discount } from "../../components/Checkout/Payment";
import { Order, Details } from "../../components/Checkout/Shipping";

//state
import { useCartState } from "../../hooks";

const Payment = () => {
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
        <title>پرداخت</title>
      </Head>
      <Container>
        <NextStep status="payment" />
        <PaymentMethod />
        <Discount />
        <Content>
          <Order />
          <Left>
            <Details />
            <NextButton url="/paid-out" title="پرداخت" />
          </Left>
        </Content>
      </Container>
    </div>
  );
};

export default Payment;

Payment.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

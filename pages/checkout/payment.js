import React from "react";

//Styled Components
import { Container } from "../../components/Checkout/Payment/Payment.style";

//Components
import { NextStep, NextButton } from "../../components/Checkout";

const payment = () => {
  return (
    <Container>
      <NextStep status="payment"/>
      <NextButton url='/paid-out' title='پرداخت'/>
    </Container>
  );
};

export default payment;

payment.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

import React from "react";

//Styled Components
import { Container } from "../../components/Checkout/Payment/Payment.style";

//Components
import { NextStep, NextButton } from "../../components/Checkout";
import { PaymentMethod, Discount } from "../../components/Checkout/Payment";
import { Order, Details} from '../../components/Checkout/Shipping'

const payment = () => {
  return (
    <Container>
      <NextStep status="payment"/>
      <PaymentMethod />
      <Discount />
      <Order />
      <Details />
      <NextButton url='/paid-out' title='پرداخت'/>
    </Container>
  );
};

export default payment;

payment.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

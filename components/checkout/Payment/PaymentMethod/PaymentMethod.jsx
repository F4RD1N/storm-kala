import React, {useState} from "react";

//Styled Components
import {
  Container,
  Title,
  MethodContainer,
  Radio,
  IconContainer,
  MethodTitle,
} from "./PaymentMethod.style";

//Icons
import { BsCreditCard } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";

const PaymentType = () => {
  // const [method, setMethod] = useState('creditcard')
  return (
    <Container>
      <Title>انتخاب روش پرداخت</Title>

      <MethodContainer for="credit">
        <Radio type="radio" name="method" id="credit" checked/>
        <IconContainer>
          <BsCreditCard />
        </IconContainer>
        <MethodTitle>پرداخت اینترنتی</MethodTitle>
      </MethodContainer>

      <MethodContainer for="home">
        <Radio type="radio" name="method" id="home"/>
        <IconContainer>
          <BiHomeAlt />
        </IconContainer>
        <MethodTitle>پرداخت درب منزل</MethodTitle>
      </MethodContainer>

    </Container>
  );
};

export default PaymentType;

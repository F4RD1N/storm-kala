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

      <MethodContainer>
        <Radio type="radio" name="method"/>
        <IconContainer>
          <BsCreditCard />
        </IconContainer>
        <MethodTitle>پرداخت اینترنتی</MethodTitle>
      </MethodContainer>

      <MethodContainer>
        <Radio type="radio" name="method"/>
        <IconContainer>
          <BiHomeAlt />
        </IconContainer>
        <MethodTitle>پرداخت درب منزل</MethodTitle>
      </MethodContainer>

    </Container>
  );
};

export default PaymentType;

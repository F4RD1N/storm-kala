import React from "react";

//Icons
import { BsCart } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";

//Styled Components
import {
  Container,
  MainTitle,
  ItemsContainer,
  Item,
  IconContainer,
  ItemTitle,
} from "./NextStep.style";
const NextStep = () => {
  return (
    <Container>
      <MainTitle>StormKala</MainTitle>
      <ItemsContainer>
        <Item isMain={false}>
          <IconContainer>
            <BsCart />
          </IconContainer>
          <ItemTitle>سبد خرید</ItemTitle>
        </Item>

        <Item isMain={true}>
          <IconContainer>
            <MdOutlineLocalShipping />
          </IconContainer>
          <ItemTitle>نحوه ارسال</ItemTitle>
        </Item>

        <Item isMain={false}>
          <IconContainer>
            <IoWalletOutline />
          </IconContainer>
          <ItemTitle>پرداخت</ItemTitle>
        </Item>
      </ItemsContainer>
    </Container>
  );
};

export default NextStep;

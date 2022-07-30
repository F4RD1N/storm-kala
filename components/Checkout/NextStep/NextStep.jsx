import React from "react";
import { useRouter } from "next/router";
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
const NextStep = ({ status }) => {
  const router = useRouter();

  return (
    <Container>
      <MainTitle>StormKala</MainTitle>
      <ItemsContainer>
        <Item isMain={false}  onClick={(status === "shipping" || status === "payment") ? () => router.replace('cart') : () => ''}>
          <IconContainer>
            <BsCart />
          </IconContainer>
          <ItemTitle>سبد خرید</ItemTitle>
        </Item>

        <Item isMain={status === "shipping" && true} onClick={status === "payment" ? () => router.replace('shipping') : () => ''}>
          <IconContainer>
            <MdOutlineLocalShipping />
          </IconContainer>
          <ItemTitle>نحوه ارسال</ItemTitle>
        </Item>

        <Item isMain={status === "payment" && true}>
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

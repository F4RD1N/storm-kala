import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import propTypes from 'prop-types'

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
} from "./nextStep.style";
const NextStep = ({ status }) => {
  const router = useRouter();

  return (
    <Container>
      <Link href='/'><MainTitle>StormKala</MainTitle></Link>
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

//props types
NextStep.propTypes = {
  status: propTypes.string.isRequired,
};
export default NextStep;

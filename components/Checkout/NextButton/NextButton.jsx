import React from "react";
import Link from "next/link";
//Styled Components
import {
  Container,
  HandleButton,
  PriceContainer,
  ProductPrice,
  TotalTitle,
} from "./NextButton.style";

//state
import { useCartState } from "../../../hooks";
//logic
import { useCart } from "../../../hooks";
//helpers
import { convertPrice } from "../../../helpers";

const NextButton = ({ url, title = "ادامه" }) => {
  const { cartItems, total, discount } = useCartState();
  const { checkoutHanlder } = useCart({ id: "" });
  if (!cartItems.length) return;

  const payHandler = () => {
    if (title === "پرداخت") {
      checkoutHanlder()
    }
  };
  return (
    <Container>
      <Link href={`/checkout${url}`}>
        <a>
          <HandleButton onClick={payHandler}>{title}</HandleButton>
        </a>
      </Link>
      <PriceContainer>
        <TotalTitle>جمع سبد خرید</TotalTitle>
        <ProductPrice>
          {convertPrice(total - total * discount)} تومان
        </ProductPrice>
      </PriceContainer>
    </Container>
  );
};

export default NextButton;

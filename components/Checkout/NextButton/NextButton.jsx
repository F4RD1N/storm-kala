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
import useCartState from "../../ProductDetails/AddToCart/useCartState";

//helpers
import { convertPrice } from "../../../helpers";

const NextButton = ({url, title = 'ادامه'}) => {
  const { cartItems, total, discount } = useCartState();

  if (!cartItems.length) return;

  return (
    <Container>
      <Link href={`/checkout${url}`}>
        <a>
          <HandleButton>{title}</HandleButton>
        </a>
      </Link>
      <PriceContainer>
        <TotalTitle>جمع سبد خرید</TotalTitle>
        <ProductPrice>{convertPrice(total - (total * discount))} تومان</ProductPrice>
      </PriceContainer>
    </Container>
  );
};

export default NextButton;

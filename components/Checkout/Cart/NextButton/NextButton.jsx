import React from "react";

//Styled Components
import {
  Container,
  HandleButton,
  PriceContainer,
  ProductPrice,
  TotalTitle
} from "./NextButton.style";

//state
import useCartState from "../../../ProductDetails/AddToCart/useCartState";

//helpers
import { convertPrice } from "../../../../helpers";

const NextButton = () => {
  const { total } = useCartState();
  return (
    <Container>
      <HandleButton>ادامه</HandleButton>
      <PriceContainer>
        <TotalTitle>جمع سبد خرید</TotalTitle>
        <ProductPrice>{convertPrice(total)} تومان</ProductPrice>
      </PriceContainer>
    </Container>
  );
};

export default NextButton;

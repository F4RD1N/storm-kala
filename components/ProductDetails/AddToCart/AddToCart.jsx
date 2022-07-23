import React from "react";

//Styled Components
import { Container, AddButton, ProductPrice } from "./AddToCart.style";

const AddToCart = () => {
  return (
    <Container>
      <AddButton>افزودن به سبد خرید</AddButton>
      <ProductPrice>۶,۰۰۰,۰۰۰ت</ProductPrice>
    </Container>
  );
};

export default AddToCart;

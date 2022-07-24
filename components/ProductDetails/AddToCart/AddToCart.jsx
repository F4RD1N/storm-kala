import React from "react";

//Styled Components
import { Container, AddButton, ProductPrice } from "./AddToCart.style";

//state
import useProductState from "../useProductState";


//logic
import { convertPrice } from "./AddToCart.logic";

const AddToCart = () => {
  const { price } = useProductState();
  

  return (
    <Container>
      <AddButton>افزودن به سبد خرید</AddButton>
      <ProductPrice>{convertPrice(price?.selling_price)} تومان</ProductPrice>
    </Container>
  );
};

export default AddToCart;

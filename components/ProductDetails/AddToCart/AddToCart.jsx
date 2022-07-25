import React from "react";

//Styled Components
import { Container, AddButton, ProductPrice, GoToSimilarSection } from "./AddToCart.style";

//state
import useProductState from "../useProductState";


//logic
import { convertPrice } from "../../../helpers";

const AddToCart = () => {
  const { price, status } = useProductState();

  return (
    <Container>
      <AddButton outStock={ status === 'out_of_stock' && true}>{status === 'out_of_stock' ? 'اتمام موجودی' : "افزودن به سبد خرید"}</AddButton>
      <ProductPrice>{status === 'out_of_stock' ? <GoToSimilarSection href="#similar">مشاهده کالا های مشابه</GoToSimilarSection> : convertPrice(price?.selling_price) + ' تومان' }</ProductPrice>
    </Container>
  );
};

export default AddToCart;

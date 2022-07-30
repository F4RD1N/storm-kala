import React from "react";

//Styled Components
import {
  Container,
  AddButton,
  PriceContainer,
  ProductPrice,
  OldPrice,
  GoToSimilarSection,
} from "./AddToCart.style";

//Components
import CartHandler from "./CartHandler";

//state
import {useProductState} from '../../../hooks'

// helpers
import { convertPrice } from "../../../helpers";

//logic
import { useCart } from "../../../hooks";

const AddToCart = () => {
  const { price, status } = useProductState();

  //cart functions
  const {
    addHandler,
    isItemExist,
  } = useCart(useProductState());

  return (
    <Container>
      {!isItemExist ? (
        <AddButton
          onClick={addHandler}
          outStock={status !== "marketable" && true}
        >
          {status !== "marketable" ? "اتمام موجودی" : "افزودن به سبد خرید"}
        </AddButton>
      ) : (
        <CartHandler data={useProductState}/>
      )}
      <PriceContainer>
        {status !== "marketable" ? (
          <GoToSimilarSection href="#similar">
            مشاهده کالا های مشابه
          </GoToSimilarSection>
        ) : (
          <>
            <OldPrice isVisible={price?.discount_percent && true}>
              {convertPrice(price?.rrp_price)}
            </OldPrice>
            <ProductPrice>
              {convertPrice(price?.selling_price) + " تومان"}
            </ProductPrice>
          </>
        )}
      </PriceContainer>
    </Container>
  );
};

export default AddToCart;

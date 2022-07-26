import React from "react";

//Styled Components
import {
  Container,
  AddButton,
  PriceContainer,
  ProductPrice,
  OldPrice,
  GoToSimilarSection,
} from "./addToCart.style";

//Components
import { CartHandler } from "../../shared";

//state
import { useProductState } from "../../../hooks";

// helpers
import { convertPrice } from "../../../helpers";

//logic
import { useCart } from "../../../hooks";

const AddToCart = () => {
  const { price, status } = useProductState();

  //cart functions
  const { addHandler, isItemExist } = useCart(useProductState());

  return (
    <Container>
      {!isItemExist ? (
        <AddButton
          onClick={addHandler}
          disabled={status !== "marketable" && true}
          outStock={status !== "marketable" && true}
        >
          {status !== "marketable" ? "اتمام موجودی" : "افزودن به سبد"}
        </AddButton>
      ) : (
        <CartHandler data={useProductState} />
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

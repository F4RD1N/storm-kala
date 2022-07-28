import React from "react";

//Styled Components
import {
  Container,
  AddButton,
  PriceContainer,
  ProductPrice,
  OldPrice,
  GoToSimilarSection,
  HandleButtonsContainer,
  HandleButton,
  Quantity,
} from "./AddToCart.style";

//Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
//state
import useProductState from "../useProductState";

//logic
import { convertPrice } from "../../../helpers";
import useCart from "./useCart";
const AddToCart = () => {
  const { price, status } = useProductState();

  //cart functions
  const {
    addHandler,
    increaseHandler,
    decreaseHandler,
    removeHanlder,
    isItemExist,
    itemQuantity,
  } = useCart();

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
        <HandleButtonsContainer>
          <HandleButton onClick={increaseHandler}>
            <AiOutlinePlus />
          </HandleButton>
          <Quantity> {itemQuantity} عدد موجود در سبد</Quantity>
          {itemQuantity > 1 ? (
            <HandleButton onClick={decreaseHandler}>
              <AiOutlineMinus />
            </HandleButton>
          ) : (
            <HandleButton onClick={removeHanlder}>
              <BsTrash />
            </HandleButton>
          )}
        </HandleButtonsContainer>
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

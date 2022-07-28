import React from "react";

//Styled Components
import {
  Container,
  AddButton,
  ProductPrice,
  GoToSimilarSection,
  HandleButtonsContainer,
  HandleButton,
  Quantity
} from "./AddToCart.style";

//Icons
import { AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
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
          outStock={
            status === "out_of_stock" || (status === "in_supply" && true)
          }
        >
          {status === "out_of_stock" ? "اتمام موجودی" : "افزودن به سبد خرید"}
        </AddButton>
      ) : (
        <HandleButtonsContainer>
          <HandleButton onClick={increaseHandler}><AiOutlinePlus /></HandleButton><Quantity> {itemQuantity} عدد موجود در سبد</Quantity>
          {itemQuantity > 1 ? (
            <HandleButton onClick={decreaseHandler}><AiOutlineMinus /></HandleButton>
          ) : (
            <HandleButton onClick={removeHanlder}><BsTrash /></HandleButton>
          )}
        </HandleButtonsContainer>
      )}
      <ProductPrice>
        {status === "out_of_stock" || status === "in_supply" ? (
          <GoToSimilarSection href="#similar">
            مشاهده کالا های مشابه
          </GoToSimilarSection>
        ) : (
          convertPrice(price?.selling_price) + " تومان"
        )}
      </ProductPrice>
    </Container>
  );
};

export default AddToCart;

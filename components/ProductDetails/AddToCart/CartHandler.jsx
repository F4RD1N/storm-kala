import React from "react";

//Styled Components
import {
  HandleButtonsContainer,
  HandleButton,
  Quantity,
  QuantityLimit,
} from "./AddToCart.style";

//Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

//logic
import useCart from "./useCart";

const CartHandler = ({ data }) => {
  //Cart functions
  const {
    increaseHandler,
    decreaseHandler,
    removeHanlder,
    itemQuantity,
    orderLimit,
  } = useCart(data());

  return (
    <HandleButtonsContainer>
      <HandleButton
        disabled={itemQuantity === orderLimit ? true : false}
        onClick={increaseHandler}
      >
        <AiOutlinePlus />
      </HandleButton>
      <Quantity>
        {itemQuantity}
        {itemQuantity === orderLimit ? (
          <QuantityLimit>حداکثر</QuantityLimit>
        ) : (
          ""
        )}
      </Quantity>
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
  );
};

export default CartHandler;

import React from "react";
import propTypes from 'prop-types';

//Styled Components
import {
  HandleButtonsContainer,
  HandleButton,
  Quantity,
  QuantityLimit,
} from "./cartHandler.style";

//Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

//logic
import { useCart } from "../../../hooks";

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

//props types
CartHandler.propTypes = {
  data: propTypes.func.isRequired,
};

export default CartHandler;

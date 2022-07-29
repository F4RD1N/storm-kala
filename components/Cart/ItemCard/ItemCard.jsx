import React from "react";
import Image from "next/image";

//Styled Components
import { Container, ImageContainer, Title } from "./ItemCard.style";
import {
  HandleButtonsContainer,
  HandleButton,
  Quantity,
  QuantityLimit,
} from "../../ProductDetails/AddToCart/AddToCart.style";


//Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

//logic
import useCart from "../../ProductDetails/AddToCart/useCart";

const ItemCard = ({data}) => {
  const {title, price, images} = data
  const {
    increaseHandler,
    decreaseHandler,
    removeHanlder,
    itemQuantity,
  } = useCart(data);
  
  return (
    <Container>
      <ImageContainer>
        <Image src={images[0].url[0]} objectFit="cover" width={50} height={70} />
      </ImageContainer>
        <Title title={title}>{title}</Title>
        <HandleButtonsContainer>
          <HandleButton
            disabled={itemQuantity === price.order_limit ? true : false}
            onClick={increaseHandler}
          >
            <AiOutlinePlus />
          </HandleButton>
          <Quantity>
            {itemQuantity}
            {itemQuantity === price.order_limit ? (
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
    </Container>
  );
};

export default ItemCard;

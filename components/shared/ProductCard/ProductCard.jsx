import React from "react";
import Image from "next/image";

//Images
import Loptop from "../../../assets/loptop.png";

//Styled Components
import {
  Container,
  ImageContainer,
  ProductName,
  Details,
  PriceContainer,
  Price,
  OldPrice,
  Badge,
} from "./ProductCard.style";

const ProductCard = ({ hasDiscount = false }) => {
  const product = {
    name: "لپتاپ ایسوس مدل zenbook4523 ui",
    price: "۴۵,۰۰۰,۰۰۰",
  };
  return (
    <Container>
      <ImageContainer>
        <Image src={Loptop} objectFit="cover" />
      </ImageContainer>
      <ProductName>{product.name}</ProductName>

      <Details>
        <Badge isVisible={hasDiscount}>%۱۵</Badge>
        <PriceContainer>
          <OldPrice isVisible={hasDiscount}>{product.price}</OldPrice>
          <Price>{product.price}ت</Price>
        </PriceContainer>
      </Details>
    </Container>
  );
};

export default ProductCard;

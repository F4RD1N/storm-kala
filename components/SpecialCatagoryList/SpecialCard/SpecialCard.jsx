import React from "react";
import Image from "next/image";

//Styled Components
import {
  Container,
  RightContainer,
  Title,
  Description,
  BuyButton,
  LeftContainer,
} from "./SpecialCard.style";

//Images
import Digital from "../../../assets/digital.png";

const SpecialCard = ({ category }) => {
  const { title_fa, top_product_image, products_count } = category;

  return (
    <Container>
      <RightContainer>
        <Title>{title_fa}</Title>
        <Description>بیش از {products_count} کالا در این دسته بندی</Description>
        <BuyButton>خرید</BuyButton>
      </RightContainer>
      <LeftContainer>
        <Image src={top_product_image} width={60} height={60} objectFit="cover" />
      </LeftContainer>
    </Container>
  );
};

export default SpecialCard;

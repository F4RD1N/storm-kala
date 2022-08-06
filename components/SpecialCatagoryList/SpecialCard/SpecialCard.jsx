import React from "react";
import Image from "next/image";
import Link from "next/link";

//Styled Components
import {
  Container,
  RightContainer,
  Title,
  Description,
  BuyButton,
  LeftContainer,
  ImageContainer
} from "./SpecialCard.style";


const SpecialCard = ({ category }) => {
  const { title_fa, top_product_image, products_count, code } = category;

  return (
    <Container>
      <RightContainer>
        <Title>{title_fa}</Title>
        <Description>بیش از {products_count} کالا در این دسته بندی</Description>
        <Link href={`/category/${code}`}>
          <BuyButton>خرید</BuyButton>
        </Link>
      </RightContainer>
      <LeftContainer>
        <ImageContainer>
        <Image
          alt={title_fa}
          src={top_product_image}
          width={70}
          height={70}
          objectFit="contain"
        />
        </ImageContainer>
      </LeftContainer>
    </Container>
  );
};

export default SpecialCard;

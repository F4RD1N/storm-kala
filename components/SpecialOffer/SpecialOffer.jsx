import React from "react";
import Image from "next/image";

//Images
import digital from "../../assets/digital.png";

//Styled Components
import {
  Container,
  TopTitle,
  Item,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  OldProductPrice,
} from "./SpecialOffer.style";


const SpecialOffer = () => {
  const title = "پیشنهاد شگفت‌انگیز";
  const product = {
    name: "گوشی ایفون 13 پرو مکس",
    price: "۴۵,۰۰۰,۰۰۰ تومان",
  };
  return (
    <Container>
      <TopTitle>{title}</TopTitle>
      <Item>
        <Image src={Phone} width={250} height={250} objectFit="cover" />
        <ProductName>{product.name}</ProductName>
        <ProductPriceContainer>
          <OldProductPrice>{product.price}</OldProductPrice>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductPriceContainer>
      </Item>
    </Container>
  );
};

export default SpecialOffer;

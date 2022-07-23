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

const SpecialCard = () => {
  return (
    <Container>
      <RightContainer>
        <Title>انواع اکسسوری</Title>
        <Description>بیش از 2500 کالا در این دسته بندی</Description>
        <BuyButton>خرید</BuyButton>
      </RightContainer>
      <LeftContainer>
        <Image src={Digital} width={80} height={80} objectFit="cover" />
      </LeftContainer>
    </Container>
  );
};

export default SpecialCard;

import React from "react";
import Image from "next/image";

//Styled Components
import { Container, Title, ImageContainer } from "./CatagoryCard.style";

//Images
import Digital from "../../../assets/digital.png";
const CatagoryCard = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={Digital} width={50} height={50} objectFit="cover" />
      </ImageContainer>
      <Title>کالا دیجیتال</Title>
    </Container>
  );
};

export default CatagoryCard;

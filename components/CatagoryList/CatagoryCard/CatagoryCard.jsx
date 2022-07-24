import React from "react";
import Image from "next/image";

//Styled Components
import { Container, Title, ImageContainer } from "./CatagoryCard.style";

//Images
import Digital from "../../../assets/digital.png";
const CatagoryCard = ({ data }) => {
  const { title_fa, logo } = data;
  return (
    <Container>
      <ImageContainer>
        <Image src={logo.url[0]} width={50} height={50} objectFit="cover" />
      </ImageContainer>
      <Title>{title_fa}</Title>
    </Container>
  );
};

export default CatagoryCard;

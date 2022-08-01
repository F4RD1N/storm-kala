import React from "react";
import Image from "next/image";
import Link from "next/link";

//Styled Components
import { Container, Title, ImageContainer } from "./CatagoryCard.style";

//Images
import Digital from "../../../assets/digital.png";
const CatagoryCard = ({ data }) => {
  const { title_fa, logo, code } = data;
  return (
    <Link href={`/category/${code}`}>
    <Container>
      <ImageContainer>
        <Image src={logo.url[0]} width={50} height={50} objectFit="cover" />
      </ImageContainer>
      <Title>{title_fa}</Title>
    </Container>
    </Link>
  );
};

export default CatagoryCard;

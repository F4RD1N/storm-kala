import React from "react";
import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";
//Styled Components
import { Container, Title, ImageContainer } from "./catagoryCard.style";

const CatagoryCard = ({ data }) => {
  const { title_fa, logo, code } = data;
  return (
    <Link href={`/category/${code}`}>
      <Container>
        <ImageContainer>
          <Image
            alt={title_fa}
            src={logo.url[0]}
            width={50}
            height={50}
            objectFit="cover"
          />
        </ImageContainer>
        <Title>{title_fa}</Title>
      </Container>
    </Link>
  );
};

//props types
CatagoryCard.propTypes = {
  data: propTypes.object.isRequired,
};

export default CatagoryCard;

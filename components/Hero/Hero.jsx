import React from "react";
import Image from "next/image";
//Images
import EarPods from "../../assets/earpods.jpeg";

//Styled Components
import { Container, ImageContainer } from "./Hero.style";

const Hero = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={EarPods}
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
        />
      </ImageContainer>
    </Container>
  );
};

export default Hero;

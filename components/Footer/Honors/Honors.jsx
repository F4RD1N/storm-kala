import React from "react";
import Image from "next/image";

//Styled Compoennts
import { Container, Honor, ImageContainer, HonorTitle } from "./Honors.style";

//Images
import Express from "../../../assets/digital.png";
const Honors = () => {
  return (
    <Container>
      {[0, 1, 2, 3].map((item) => {
        return (
          <Honor key={item}>
            <ImageContainer>
              <Image src={Express} width={100} height={100} objectFit="cover"/>
            </ImageContainer>
            <HonorTitle>تضمین بهترین قیمت</HonorTitle>
          </Honor>
        );
      })}
    </Container>
  );
};

export default Honors;

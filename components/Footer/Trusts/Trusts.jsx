import React from "react";
import Image from "next/image";

//Styled Components
import { Container, ImageContainer } from "./Trusts.style";

//Images
import Trust from "../../../assets/digital.png";
const Trusts = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://www.digikala.com/statics/img/png/rezi.png"
          height={150}
          width={150}
          objectFit="contain"
        />
      </ImageContainer>

      <ImageContainer>
        <Image
          src="https://www.digikala.com/statics/img/png/kasbokar.png"
          height={150}
          width={150}
          objectFit="contain"
        />
      </ImageContainer>

      <ImageContainer>
        <Image
          src="https://www.digikala.com/statics/img/png/enamad.png"
          height={150}
          width={150}
          objectFit="contain"
        />
      </ImageContainer>
    </Container>
  );
};

export default Trusts;

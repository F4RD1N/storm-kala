import React from 'react'
import Image from "next/image";

//Styled Components
import { ImageContainer } from "./Trusts.style";

const Trust = ({source}) => {
  return (
    <ImageContainer>
        <Image
          alt="trust image"
          src={source}
          height={150}
          width={150}
          objectFit="contain"
        />
      </ImageContainer>
  )
}

export default Trust
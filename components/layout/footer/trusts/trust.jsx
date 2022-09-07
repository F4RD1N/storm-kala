import React from 'react'
import Image from "next/image";
import propTypes from 'prop-types'

//Styled Components
import { ImageContainer } from "./trusts.style";

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

//props types
Trust.propTypes = {
  source: propTypes.string.isRequired
};

export default Trust
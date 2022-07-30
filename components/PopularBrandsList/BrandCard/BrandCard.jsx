import React from 'react'
import Image from 'next/image'

//Styled Components
import { Container, ImageContainer, Overlay } from './BrandCard.style'


const BrandCard = ({brand}) => {

  const {title_fa, logo} = brand
  return (
    <Container>
        <ImageContainer>
        <Image src={logo.url[0]} objectFit="contain" width={80} height={80}/>
        </ImageContainer>
        <Overlay>{title_fa}</Overlay>
    </Container>
  )
}

export default BrandCard
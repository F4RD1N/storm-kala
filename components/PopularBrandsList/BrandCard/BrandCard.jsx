import React from 'react'
import Image from 'next/image'

//Styled Components
import { Container, ImageContainer, Overlay } from './BrandCard.style'

//Images
import Brand from '../../../assets/tsco.png'
const BrandCard = ({brand}) => {

  const {title_fa, logo} = brand
  return (
    <Container>
        <ImageContainer>
        <Image src={brand.logo.url[0]} objectFit="cover" width={90} height={90}/>
        </ImageContainer>
        <Overlay>{title_fa}</Overlay>
    </Container>
  )
}

export default BrandCard
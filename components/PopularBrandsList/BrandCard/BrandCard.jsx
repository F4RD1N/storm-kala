import React from 'react'
import Image from 'next/image'

//Styled Components
import { Container, ImageContainer, Overlay } from './BrandCard.style'

//Images
import Brand from '../../../assets/tsco.png'
const BrandCard = () => {
  return (
    <Container>
        <ImageContainer>
        <Image src={Brand}/>
        </ImageContainer>
        <Overlay>۷۵۶+ کالا</Overlay>
    </Container>
  )
}

export default BrandCard
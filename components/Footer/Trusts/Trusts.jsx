import React from 'react'
import Image from 'next/image'

//Styled Components 
import { Container, ImageContainer } from './Trusts.style'


//Images
import Trust from '../../../assets/digital.png'
const Trusts = () => {
  return (
    <Container>
        <ImageContainer>
            <Image src={Trust}/>
        </ImageContainer>

        <ImageContainer>
            <Image src={Trust}/>
        </ImageContainer>

        <ImageContainer>
            <Image src={Trust}/>
        </ImageContainer>
    </Container>
  )
}

export default Trusts
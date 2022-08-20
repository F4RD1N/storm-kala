import React from 'react'

//Styled Components
import { Container, Button } from './SliderNavigation.style'

//icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SliderNavigation = ({refs}) => {
    console.log(refs);
  return (
    <Container>
        <Button ref={refs.next}><BiChevronRight /></Button>
        <Button ref={refs.prev}><BiChevronLeft /></Button>
    </Container>
  )
}

export default SliderNavigation
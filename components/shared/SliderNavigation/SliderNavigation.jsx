import React from 'react'

//Styled Components
import { Container, Button } from './SliderNavigation.style'

//icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SliderNavigation = ({refs}) => {
  return (
    <Container>
        <Button ref={refs.prev}><BiChevronRight /></Button>
        <Button ref={refs.next}><BiChevronLeft /></Button>
    </Container>
  )
}

export default SliderNavigation
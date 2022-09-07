import React from 'react'
import propTypes from 'prop-types'

//Styled Components
import { Container, Button } from './sliderNavigation.style'

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

//props types
SliderNavigation.propTypes = {
  refs: propTypes.object.isRequired,
};
export default SliderNavigation
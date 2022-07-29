import React from 'react'

//Components
import NextStep from '../../components/Checkout/NextStep/NextStep'
import Address from '../../components/Checkout/Shipping/Address'
import Order from '../../components/Checkout/Shipping/Order'
import Details from '../../components/Checkout/Shipping/Details'
import { NextButton } from '../../components/Checkout/Cart'
//Styled Components
import { Container } from '../../components/Checkout/Shipping/Shipping.style'
const shipping = () => {
  return (
    <Container>
        <NextStep />
        <Address />
        <Order />
        <Details />
        <NextButton />
    </Container>
  )
}

export default shipping

shipping.getLayout = function PageLayout(page) {
    return(
      <>
       {page}
      </>
    )
  }
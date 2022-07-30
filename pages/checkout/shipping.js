import React from 'react'

//Components
import {NextStep, NextButton} from '../../components/Checkout'
import {Address, Order, Details} from '../../components/Checkout/Shipping'
//Styled Components
import { Container } from '../../components/Checkout/Shipping/Shipping.style'
const shipping = () => {
  return (
    <Container>
        <NextStep status='shipping'/>
        <Address />
        <Order />
        <Details />
        <NextButton url='/payment'/>
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
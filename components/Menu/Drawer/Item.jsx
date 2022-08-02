import React from 'react'

//Styled Components
import { ItemContainer, IconContainer, ItemTitle } from './DrawerMenu.style'

const Item = ({title, icon}) => {
  return (
    <ItemContainer>
        <IconContainer>{icon}</IconContainer>
        <ItemTitle>{title}</ItemTitle>
    </ItemContainer>
  )
}

export default Item
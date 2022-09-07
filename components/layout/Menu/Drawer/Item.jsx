import React from 'react'
import propTypes from 'prop-types'

//Styled Components
import { ItemContainer, IconContainer, ItemTitle } from './drawerMenu.style'

const Item = ({title, icon}) => {
  return (
    <ItemContainer>
        <IconContainer>{icon}</IconContainer>
        <ItemTitle>{title}</ItemTitle>
    </ItemContainer>
  )
}

//props types
Item.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.object.isRequired,
};
export default Item
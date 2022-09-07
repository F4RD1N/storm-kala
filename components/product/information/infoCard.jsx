import React from "react";
import propTypes from 'prop-types'

//Styled Components
import { ItemContainer, Item, ItemValue } from "./information.style";

const InfoCard = ({title, value}) => {
  return (
    <ItemContainer>
      <Item>{title}:</Item>
      <ItemValue>{value}</ItemValue>
    </ItemContainer>
  );
};

//props types
InfoCard.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

export default InfoCard;

import React from "react";
//Styled Components
import { ItemContainer, Item, ItemValue } from "./Information.style";

const InfoCard = ({title, value}) => {
  return (
    <ItemContainer>
      <Item>{title}:</Item>
      <ItemValue>{value}</ItemValue>
    </ItemContainer>
  );
};

export default InfoCard;

import React from "react";
import propTypes from 'prop-types'

//Styled Compoennts
import { HonorItem, IconContainer, HonorTitle } from "./honors.style";

const Honor = ({title, icon}) => {
  return (
    <HonorItem>
      <IconContainer>
        {icon}
      </IconContainer>
      <HonorTitle>{title}</HonorTitle>
    </HonorItem>
  );
};

//props types
Honor.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.object.isRequired
};

export default Honor;

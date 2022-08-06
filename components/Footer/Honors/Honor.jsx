import React from "react";
//Styled Compoennts
import { HonorItem, IconContainer, HonorTitle } from "./Honors.style";

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

export default Honor;

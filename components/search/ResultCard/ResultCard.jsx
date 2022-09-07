import React from "react";
import Image from "next/image";
import propTypes from 'prop-types'

//styled Components
import {
  CardContainer,
  CardImageContainer,
  CardTitle,
} from "./ResultCard.style";
const SearchCard = ({ data }) => {
  const { title_fa, images } = data;
  return (
    <CardContainer>
      <CardImageContainer>
        <Image
          alt={title_fa}
          src={images.main.url[0]}
          objectFit="cover"
          width={75}
          height={75}
        />
      </CardImageContainer>
      <CardTitle>{title_fa}</CardTitle>
    </CardContainer>
  );
};

//props types
SearchCard.propTypes = {
  data: propTypes.object.isRequired,
};

export default SearchCard;

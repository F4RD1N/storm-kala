import React from "react";
import Image from "next/image";
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

export default SearchCard;

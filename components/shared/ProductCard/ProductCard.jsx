import React from "react";
import Image from "next/image";

//Styled Components
import {
  Container,
  ImageContainer,
  ProductName,
  Details,
  PriceContainer,
  Price,
  OldPrice,
  Badge,
} from "./ProductCard.style";

//Helpers
import { convertPrice, englishToPersian } from "../../../helpers";

const ProductCard = ({ data }) => {
  const { title_fa, images, default_variant } = data;
  return (
    <Container>
      <ImageContainer>
        <Image
          src={images.main.url[0]}
          objectFit="cover"
          width={200}
          height={200}
        />
      </ImageContainer>
      <ProductName>{title_fa}</ProductName>
      <Details>
        <Badge isVisible={default_variant?.price.discount_percent && true}>
          %{englishToPersian(default_variant?.price.discount_percent)}
        </Badge>
        <PriceContainer>
          <OldPrice isVisible={default_variant.price.discount_percent && true}>
            {convertPrice(default_variant?.price.rrp_price)}
          </OldPrice>
          <Price>{convertPrice(default_variant?.price.selling_price)}ت</Price>
        </PriceContainer>
      </Details>
    </Container>
  );
};

export default ProductCard;

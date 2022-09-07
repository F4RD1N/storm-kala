import React from "react";
import Image from "next/image";
import propTypes from 'prop-types'

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
  Unavailable,
} from "./productCard.style";

//Helpers
import { convertPrice, englishToPersian } from "../../../helpers";

const ProductCard = ({ data }) => {
  const { title_fa, images, default_variant } = data;
  return (
    <Container>
      <ImageContainer>
        <Image
          src={images.main.url[0]}
          alt={title_fa}
          objectFit="cover"
          width={100}
          height={100}
        />
      </ImageContainer>
      <ProductName>{title_fa}</ProductName>
      <Details>
        <Badge isVisible={default_variant?.price?.discount_percent && true}>
          %{englishToPersian(default_variant?.price?.discount_percent)}
        </Badge>
        <PriceContainer>
          <OldPrice
            isVisible={default_variant?.price?.discount_percent && true}
          >
            {convertPrice(default_variant?.price?.rrp_price)}
          </OldPrice>
          {default_variant?.price?.selling_price ? (
            <Price>
              {convertPrice(default_variant?.price?.selling_price)}ت
            </Price>
          ) : (
            <Unavailable>اتمام موجودی</Unavailable>
          )}
        </PriceContainer>
      </Details>
    </Container>
  );
};

//props types
ProductCard.propTypes = {
  data: propTypes.object.isRequired,
};

export default ProductCard;

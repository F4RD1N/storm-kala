import React from "react";
import Image from "next/image";
import Link from "next/link";
import propTypes from 'prop-types'

//Styled Components
import {
  Container,
  RightContainer,
  ImageContainer,
  DetailsContainer,
  Title,
  Price,
} from "./itemCard.style";

//Components
import CartHandler from "../../../product/addToCart/cartHandler";

//helpers
import { convertPrice } from "../../../../helpers";
const ItemCard = ({ data }) => {
  const { id, title, images, price, quantity } = data;
  
  return (
    <Container>
      <RightContainer>
        <Link href={`/product/${id}`}>
          <a>
            <ImageContainer>
              <Image  
                alt={title}
                src={images[0].url[0]}
                objectFit="contain"
                width={50}
                height={70}
              />
            </ImageContainer>
          </a>
        </Link>
        <DetailsContainer>
          <Title title={title}>{title}</Title>
          <Price>{convertPrice(price.selling_price * quantity)} تومان</Price>
        </DetailsContainer>
      </RightContainer>
      <CartHandler data={() => data} />
    </Container>
  );
};

//props types
ItemCard.propTypes = {
  data: propTypes.object.isRequired,
};

export default ItemCard;

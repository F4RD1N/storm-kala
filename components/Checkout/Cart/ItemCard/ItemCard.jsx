import React from "react";
import Image from "next/image";
import Link from "next/link";

//Styled Components
import {
  Container,
  ImageContainer,
  DetailsContainer,
  Title,
  Price
} from "./ItemCard.style";

//Components
import CartHandler from "../../../ProductDetails/AddToCart/CartHandler";

//helpers
import {convertPrice} from '../../../../helpers'
const ItemCard = ({ data }) => {
  const { id, title, images, price, quantity } = data;

  return (
    <Container>
      <Link href={`/product/${id}`}>
        <a>
          <ImageContainer>
            <Image
              src={images[0].url[0]}
              objectFit="cover"
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
      <CartHandler data={() => data} />
    </Container>
  );
};

export default ItemCard;

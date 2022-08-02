import React, { useState } from "react";
import Link from "next/link";

//Icons
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

//Styled Components
import {
  Container,
  IconContainer,
  MainTitle,
  CartCounter,
} from "./Header.style";

//cart state
import { useCartState } from "../../hooks";

const Header = ({ drawerHandler }) => {
  const { itemsCounter } = useCartState();

  return (
    <Container>
      <IconContainer onClick={drawerHandler}>
        <GiHamburgerMenu />
      </IconContainer>
      <Link href="/">
        <MainTitle>StromKala</MainTitle>
      </Link>
      <Link href="/checkout/cart">
        <IconContainer>
          <BsCart />
          {itemsCounter ? <CartCounter>{itemsCounter}</CartCounter> : ""}
        </IconContainer>
      </Link>
    </Container>
  );
};

export default Header;

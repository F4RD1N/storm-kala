import React from "react";
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
import { useCartState, useDrawer } from "../../../hooks";

const Header = () => {
  const { itemsCounter } = useCartState();
  const {drawerHandler} = useDrawer()
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

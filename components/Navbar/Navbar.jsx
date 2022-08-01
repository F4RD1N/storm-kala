import React from "react";
import Link from "next/link";
//Icons
import { FiSearch } from "react-icons/fi";
import { BsPerson, BsCart } from "react-icons/bs";

//Styled Components
import {
  Container,
  Input,
  InputContainer,
  Item,
  CartCounter,
  LeftContainer,
} from "./Navbar.style";


//cart state
import { useCartState } from "../../hooks";

const Navbar = () => {
  const { itemsCounter } = useCartState();
  return (
    <Container>
      <Link href='/search?q='>
          <InputContainer>
            <FiSearch />
            <Input disabled placeholder="جستجو" />
          </InputContainer>
      </Link>
      <LeftContainer>
        <Item>
          <BsPerson />
        </Item>
        <Link href="/checkout/cart">
          <a>
            <Item>
              <BsCart />
              {itemsCounter ? <CartCounter>{itemsCounter}</CartCounter> : ""}
            </Item>
          </a>
        </Link>
      </LeftContainer>
    </Container>
  );
};

export default Navbar;

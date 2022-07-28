import React from "react";

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

//Components
import { SearchOverlay, CartOverlay } from "../";

//logic
import useNavbar from "./useNavbar";

//cart state
import useCartState from "../ProductDetails/AddToCart/useCartState";

const Navbar = () => {
  const { toggleSearch, searchHandler } = useNavbar();
  const { itemsCounter } = useCartState();
  return (
    <Container>
      {toggleSearch && <SearchOverlay overlayHandler={searchHandler} />}

      <InputContainer onClick={searchHandler}>
        <FiSearch />
        <Input disabled placeholder="جستجو" />
      </InputContainer>
      <LeftContainer>
        <Item>
          <BsPerson />
        </Item>
        <Item>
          <BsCart />
          {itemsCounter ? <CartCounter>{itemsCounter}</CartCounter> : ""}
        </Item>
      </LeftContainer>
    </Container>
  );
};

export default Navbar;

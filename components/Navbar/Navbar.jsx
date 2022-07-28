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
  LeftContainer,
} from "./Navbar.style";

//Components
import { SearchOverlay } from "../";

//logic
import useNavbar from "./useNavbar";

const Navbar = () => {
    const {toggleOverlay, overlayHandler} = useNavbar()

  return (
    <Container>
      {toggleOverlay && <SearchOverlay overlayHandler={overlayHandler} />}

      <InputContainer onClick={overlayHandler}>
        <FiSearch />
        <Input disabled placeholder="جستجو" />
      </InputContainer>
      <LeftContainer>
        <Item>
          <BsPerson />
        </Item>
        <Item>
          <BsCart />
        </Item>
      </LeftContainer>
    </Container>
  );
};

export default Navbar;

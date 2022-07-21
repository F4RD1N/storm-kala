import React from "react";
//Icons
import { FiMenu } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
//Styled Components
import { Container, Item, MainTitle } from "./Header.style";
const Header = () => {
  return (
    <Container>
      <Item>
        <FiMenu />
      </Item>
      <MainTitle>StromKala</MainTitle>
      <Item>
        <BsQuestionCircle />
      </Item>
    </Container>
  );
};

export default Header;

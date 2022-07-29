import React from "react";
import Link from "next/link";
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
      <Link href="/">
        <a>
          <MainTitle>StromKala</MainTitle>
        </a>
      </Link>
      <Item>
        <BsQuestionCircle />
      </Item>
    </Container>
  );
};

export default Header;

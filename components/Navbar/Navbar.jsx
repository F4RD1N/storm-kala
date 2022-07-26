import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

const Navbar = () => {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const overlayHandler = () =>
    setToggleOverlay((currentValue) => !currentValue);
  //close overlay when route changes
  const router = useRouter();
  useEffect(() => {
    setToggleOverlay(false);
  }, [router.query]);
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

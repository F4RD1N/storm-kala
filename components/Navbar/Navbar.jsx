import React, { useState } from "react";

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
  SearchBox,
} from "./Navbar.style";

//Components
import Search from "./Search/Search";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const inputHandler = (event) => setSearchValue(event.target.value);

  const overlayHandler = () => setToggleOverlay(currentValue => !currentValue);
  return (
    <Container>
      {toggleOverlay && <SearchBox>
        <Search
          value={searchValue}
          handler={inputHandler}
          overlayHandler={overlayHandler}
        />
      </SearchBox>}
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

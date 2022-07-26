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

  const inputHandler = (event) => setSearchValue(event.target.value);
  return (
    <Container>
      <SearchBox>
        <InputContainer>
          <FiSearch />
          <Input
            placeholder="جستجو"
            value={searchValue}
            onChange={inputHandler}
          />
        </InputContainer>
        <Search value={searchValue} />
      </SearchBox>
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

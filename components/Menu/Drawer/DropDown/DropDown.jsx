import React, { useState } from "react";
import Link from "next/link";

//Styled Components
import {
  Container,
  Title,
  IconContainer,
  Arrow,
  Right,
  Content,
  Item,
} from "./DropDown.style";

//Icons
import { BiMobileAlt } from "react-icons/bi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const DropDown = ({ title, icon, sub }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dropMenuHandler = () => setToggleMenu((currentValue) => !currentValue);
  return (
    <>
      <Container onClick={dropMenuHandler}>
        <Right>
          <IconContainer>{icon}</IconContainer>
          <Title>{title}</Title>
        </Right>
        <Arrow>
          {toggleMenu ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </Arrow>
      </Container>

      <Content isVisible={toggleMenu}>
        {sub.map((item) => {
          return (
            <Link key={item.id} href={`/category/${item.code}`}>
              <Item>{item.title}</Item>
            </Link>
          );
        })}
      </Content>
    </>
  );
};

export default DropDown;

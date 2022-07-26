import React, { useState } from "react";
import Link from "next/link";
import propTypes from 'prop-types'

//Styled Components
import {
  Container,
  Title,
  IconContainer,
  Arrow,
  Right,
  Content,
  Item,
} from "./dropDown.style";

//Icons
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

//props types
DropDown.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.object.isRequired,
  sub: propTypes.array.isRequired,
};

export default DropDown;

import React, { useState } from "react";

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
        {/* {sub.map((item) => {
          return (
            <Link key={item.id} href={`/category/${item.code}`}>
              <Item>{item.title}</Item>
            </Link>
          );
        })} */}

        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(item => {
            return(
              <Item key={item}>کالای دیجیتال</Item>
            )
          })
        }
      </Content>
    </>
  );
};

export default DropDown;

import React from 'react'

//Icons
import { FiSearch } from "react-icons/fi";
import { BsPerson, BsCart } from "react-icons/bs";

//Styled Components
import { Container, Input, InputContainer, Item, LeftContainer } from './Navbar.style'


const Navbar = () => {
  return (
    <Container>
        <InputContainer>
            <FiSearch />
            <Input placeholder='جستجو'/>
        </InputContainer>
        <LeftContainer>
            <Item><BsPerson/></Item>
            <Item><BsCart/></Item>
        </LeftContainer>
    </Container>
  )
}

export default Navbar
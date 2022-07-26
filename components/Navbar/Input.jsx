import React, { useEffect, useRef } from "react";

//Icons
import { AiOutlineArrowRight } from "react-icons/ai";

//Styled Components
import { Input, InputContainer, IconContainer,  } from "./Navbar.style";

const SearchInput = ({ value, handler, overlayHandler, ref }) => {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <InputContainer>
      <IconContainer onClick={overlayHandler}>
        <AiOutlineArrowRight />
      </IconContainer>
      <Input placeholder="جستجو" value={value} onChange={handler} ref={inputRef}/>
    </InputContainer>
  );
};

export default SearchInput;

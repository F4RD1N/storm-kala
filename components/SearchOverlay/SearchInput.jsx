import React, { useEffect, useRef } from "react";

//Icons
import { AiOutlineArrowRight } from "react-icons/ai";

//Styled Components
import { Input, InputContainer, IconContainer } from "./SearchOverlay.style";

const SearchInput = ({overlayHandler, value, valueHandler}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <InputContainer>
      <IconContainer onClick={overlayHandler}>
        <AiOutlineArrowRight />
      </IconContainer>
      <Input
        placeholder="جستجو"
        value={value}
        onChange={valueHandler}
        ref={inputRef}
      />
    </InputContainer>
  );
};

export default SearchInput;

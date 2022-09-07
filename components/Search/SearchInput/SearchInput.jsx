import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import propTypes from 'prop-types'

//Icons
import { AiOutlineArrowRight } from "react-icons/ai";

//Styled Components
import { Input, InputContainer, IconContainer } from "./SearchInput.style";

const SearchInput = ({ value, valueHandler}) => {
  //focus input when page mounted
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const router = useRouter()
  const routeHandler = () => router.back() 

  //pass query to url
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace(`/search?q=${value ? value : ''}`, undefined, {shallow: true})
    }, 500);
    return () => clearTimeout(timeout)
  }, [value])
  return (
    <InputContainer>
      <IconContainer onClick={routeHandler}>
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

//props types
SearchInput.propTypes = {
  value: propTypes.string.isRequired,
  valueHandler: propTypes.func.isRequired,
};

export default SearchInput;

import React, { useState } from "react";
import { useRouter } from "next/router";
//Styled Components
import { InputContainer, SearchInput, IconContainer } from "./drawerMenu.style";

//Icons
import { FiSearch } from "react-icons/fi";

const Input = () => {
  const [value, setValue] = useState("");

  const inputHandler = (event) => setValue(event.target.value);

  const router = useRouter();
  const searchHandler = () => {
    if (value) {
      router.push(`/search?q=${value}`)
      document.body.style.overflow = "unset"
      setValue("")
    }
  };
  const keyHandler = (event) => {
    if (value && event.key === "Enter") {
      router.push(`/search?q=${value}`)
      document.body.style.overflow = "unset"
      setValue("")
    }
  };
  return (
    <InputContainer>
      <SearchInput
        value={value}
        onChange={inputHandler}
        placeholder="جستجو"
        onKeyDown={keyHandler}
      />

      <IconContainer onClick={searchHandler}>
        <FiSearch />
      </IconContainer>
    </InputContainer>
  );
};

export default Input;

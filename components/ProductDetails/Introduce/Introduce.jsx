import React, { useState } from "react";

//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

//Styled Components
import { Container, Title, Description } from "./Introduce.style";

//Shared Styled Components
import { ReadMore } from "../../../styles/shared";

//state
import useProductState from "../useProductState";

const Introduce = () => {
  //toogle view
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle((currentValue) => !currentValue);

  const { introduce } = useProductState();
  return (
    <Container isVisible={introduce}>
      <Title>معرفی</Title>
      <Description showFull={toggle}>{introduce}</Description>
      <ReadMore onClick={toggleHandler} showFull={toggle}>
        {toggle ? "کمتر" : "بیشتر"} <AiOutlineArrowLeft />
      </ReadMore>
    </Container>
  );
};

export default Introduce;

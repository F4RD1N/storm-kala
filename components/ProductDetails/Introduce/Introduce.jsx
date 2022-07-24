import React from "react";

//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

//Styled Components
import { Container, Title, Description } from "./Introduce.style";

//Shared Styled Components
import { ReadMore } from "../../../styles/shared";

//state
import useProductState from "../useProductState";

const Introduce = () => {
  const { introduce } = useProductState();
  return (
    <Container isVisible={introduce}>
      <Title>معرفی</Title>
      <Description showFull={false}>{introduce}</Description>
      <ReadMore>
        بیشتر <AiOutlineArrowLeft />
      </ReadMore>
    </Container>
  );
};

export default Introduce;

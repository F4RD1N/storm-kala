import React from "react";

//Styled Componets
import {
  Container,
  ProductName,
  ColorsContainer,
  Color,
} from "./MainDetails.style";

//state
import useProductState from "../useProductState";

const MainDetails = () => {
  const { mainDetails } = useProductState();

  return (
    <Container>
      <ProductName>{mainDetails?.title}</ProductName>
      <ColorsContainer isVisible={ !mainDetails?.colors.length ? false : true}>
        رنگ:
        {mainDetails?.colors.map((item) => {
          const { id, hex_code } = item;
          return <Color key={id} color={hex_code} pressed={true} />;
        })}
      </ColorsContainer>
    </Container>
  );
};

export default MainDetails;

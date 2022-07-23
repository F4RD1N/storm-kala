import React from "react";

//Styled Componets
import {
  Container,
  ProductName,
  ColorsContainer,
  Color,
} from "./MainDetails.style";
const MainDetails = () => {
  return (
    <Container>
      <ProductName>
        گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128
        گیگابایت و رم 6 گیگابایت
      </ProductName>
      <ColorsContainer>
        رنگ:
        <Color color="rgb(33, 150, 243)" />
        <Color color="white" pressed={true} />
        <Color color="rgb(156, 39, 177)" />
      </ColorsContainer>
    </Container>
  );
};

export default MainDetails;

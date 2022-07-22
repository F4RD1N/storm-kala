import React from "react";

//Styled Components
import { Container, SectionTitle, List } from "./CatagoryList.style";

//Shared Components
import { CatagoryCard } from "../shared";

const CatagoryList = () => {
  return (
    <Container>
      <SectionTitle>دسته بندی ها</SectionTitle>
      <List>
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
      </List>
    </Container>
  );
};

export default CatagoryList;

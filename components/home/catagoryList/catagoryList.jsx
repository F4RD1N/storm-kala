import React from "react";

//Styled Components
import { Container, SectionTitle, List } from "./catagoryList.style";

//Shared Components
import CatagoryCard from "./catagoryCard";

//state
import { useHomeState } from "../../../hooks";

const CatagoryList = () => {
  const { categories } = useHomeState();

  
  return (
    <Container>
      <SectionTitle>دسته بندی ها</SectionTitle>
      <List>
        {categories &&
          categories.length &&
          categories.map((category) => {
            return <CatagoryCard key={category.id} data={category} />;
          })}
      </List>
    </Container>
  );
};

export default CatagoryList;

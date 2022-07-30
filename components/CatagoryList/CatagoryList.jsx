import React from "react";

//Styled Components
import { Container, SectionTitle, List } from "./CatagoryList.style";

//Shared Components
import CatagoryCard from "./CatagoryCard";

//state
import { useHomeState } from "../../hooks";

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

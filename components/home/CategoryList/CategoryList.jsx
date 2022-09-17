import React from "react";

//Styled Components
import { Container, SectionTitle, List } from "./categoryList.style";

//Components
import { CategoryCard } from "./CategoryCard";

//state
import { useHomeState } from "../../../hooks";

const CategoryList = () => {
  const { categories } = useHomeState();

  return (
    <Container>
      <SectionTitle>دسته بندی ها</SectionTitle>
      <List>
        {categories &&
          categories.length &&
          categories.map((category) => {
            return <CategoryCard key={category.id} data={category} />;
          })}
      </List>
    </Container>
  );
};

export default CategoryList;

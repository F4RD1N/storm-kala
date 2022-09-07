import React from "react";
import Link from "next/link";

//Styled Componets
import {
  Container,
  ProductName,
  ColorsContainer,
  Color,
  CategoryContainer,
  Category,
} from "./MainDetails.style";

//state
import { useProductState } from "../../../hooks";

const MainDetails = () => {
  const { mainDetails, category } = useProductState();

  return (
    <Container>
      <ProductName>{mainDetails?.title}</ProductName>
      {/* <ColorsContainer isVisible={!mainDetails?.colors.length ? false : true}>
        رنگ:
        {mainDetails?.colors.map((item) => {
          const { id, hex_code } = item;
          return <Color key={id} color={hex_code} pressed={true} />;
        })}
      </ColorsContainer> */}
      <CategoryContainer>
        دسته بندی:
        <Link href={`/category/${category?.code}`}>
          <a>
            <Category> {category?.title_fa}</Category>
          </a>
        </Link>
      </CategoryContainer>
    </Container>
  );
};

export default MainDetails;

import React from "react";

//Styled Components
import { Container } from "./Results.style";

//Components
import { ProductCard } from "../../shared";
//state
import { useCategoryState } from "../../../hooks";

const Results = () => {
  const { products } = useCategoryState();
  return (
    <Container>
      {products?.map((product) => {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            href={`/product/${product.id}`}
            key={product.id}
          >
            <ProductCard data={product} />
          </a>
        );
      })}
    </Container>
  );
};

export default Results;

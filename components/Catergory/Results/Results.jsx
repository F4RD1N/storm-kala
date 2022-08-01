import React from "react";
import Link from "next/link";

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
          <Link href={`/product/${product.id}`} key={product.id} >
            <a>
              <ProductCard data={product} />
            </a>
          </Link>
        );
      })}
    </Container>
  );
};

export default Results;

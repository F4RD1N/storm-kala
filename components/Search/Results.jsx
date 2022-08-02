import React from "react";

//Styled Components
import {
  ResultsContainer,
  LoadMoreButton,
  Loading,
  Error,
} from "./Search.style";

//Components
import { ProductCard } from "../shared";

//logic
import { useResults } from "../../hooks";
const Results = ({ state }) => {
  const { pageHandler } = useResults();

  const { products, loading, error, pager } = state();

  //check if there is no product to show
  if (pager?.total_items === 0) return <Error>موردی یافت نشد</Error>;

  return (
    <>
      <ResultsContainer>
        {products?.map((product) => {
          const { id } = product;

          //check if the page is last page
          if (pager?.current_page === pager?.total_pages) return;

          return (
            <a
              target="_blank"
              rel="noreferrer"
              href={`/product/${id}`}
              key={id}
            >
              <ProductCard data={product} />
            </a>
          );
        })}
      </ResultsContainer>

      {!products.length && loading ? <Loading>کمی صبر کنید ...</Loading> : ""}
      {products.length ? (
        pager?.current_page < pager?.total_pages ? (
          <LoadMoreButton
            disabled={loading ? true : false}
            onClick={pageHandler}
          >
            {loading ? "کمی صبر کنید ..." : "بیشتر"}
          </LoadMoreButton>
        ) : (
          <Loading>به انتهای لیست رسیدید!</Loading>
        )
      ) : (
        ""
      )}
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Results;
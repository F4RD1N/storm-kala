import React from "react";
import propTypes from 'prop-types'

//Styled Components
import {
  ResultsContainer,
  LoadMoreButton,
  Loading,
  Error,
  BaseStatement,
  EndOfList
} from "./results.style";

//Components
import { ProductCard, LoadingIndicator } from "../../shared";

//logic
import { useSearch } from "../../../hooks";
const Results = ({ state }) => {
  const { pageHandler } = useSearch();

  const { products, loading, error, pager } = state();

  //check if there is no product to show
  if (pager?.total_items === 0) return <Error>موردی یافت نشد</Error>;

  //base

  return (
    <>
      <ResultsContainer>
        {products?.map((product) => {
          const { id } = product;

          //check if the page is last page
          // if (pager?.current_page === pager?.total_pages) return;

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
       {!pager && !loading && !error && <BaseStatement>دنبال چه محصولی میگردی؟!</BaseStatement>}
      {!products.length && loading ? <Loading>کمی صبر کنید ...</Loading> : ""}
      {products.length ? (
        pager?.current_page < pager?.total_pages ? (
          <LoadMoreButton
            disabled={loading ? true : false}
            pressed={loading}
            onClick={pageHandler}
          >
            {loading ? <LoadingIndicator /> : "بیشتر"}
          </LoadMoreButton>
        ) : (
          <EndOfList>به انتهای لیست رسیدید!</EndOfList>
        )
      ) : (
        ""
      )}
      {error && <Error>مشکلی در ارتباط با سرور بیش آمد!</Error>}
    </>
  );
};

//props types
Results.propTypes = {
  state: propTypes.func.isRequired,
};

export default Results;

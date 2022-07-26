import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

//redux
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../redux/search/searchAction";

//state
import useSearchState from "./useSearchState";

//Styled Components
import {
  ResultsContainer,
  LoadMoreButton,
  Loading,
} from "./SearchOverlay.style";

//Components
import { ProductCard } from "../shared";

const Results = ({ value }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      value && dispatch(fetchSearch(value));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [value]);
  const { products, loading, pager } = useSearchState();
  //page Handler
  const [page, setPage] = useState(1);
  const pageHandler = () => {
    setPage((currentValue) => currentValue + 1);
    dispatch(fetchSearch(value, page));
  };

  return (
    <>
      <ResultsContainer>
        {products?.map((product) => {
          const { id } = product;

          //check if the page is last page
          if (pager?.current_page + 3 === pager?.total_pages) return;

          return (
            <Link href={`/product/${id}`} key={id}>
              <a>
                <ProductCard data={product} />
              </a>
            </Link>
          );
        })}
      </ResultsContainer>

      {!products.length && loading ? <Loading>کمی صبر کنید ...</Loading> : ""}
      {products.length ? (
        <LoadMoreButton onClick={pageHandler}>
          {loading ? "کمی صبر کنید ..." : "بیشتر"}
        </LoadMoreButton>
      ) : (
        ""
      )}
    </>
  );
};

export default Results;

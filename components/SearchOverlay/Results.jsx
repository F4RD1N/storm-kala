import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../../redux/search/searchAction";

//state
import useSearchState from "./useSearchState";

//Styled Components
import {
  ResultsContainer,
  LoadMoreButton,
  Loading,
  Error
} from "./SearchOverlay.style";

//Components
import { ProductCard } from "../shared";

const Results = ({ value }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      value && dispatch(fetchSearch(value));
    }, 1000);
    return () => {
      dispatch(clearSearch());
      clearTimeout(timeout);
    };
  }, [value]);
  const { products, loading,error, pager } = useSearchState();
  //page Handler
  const [page, setPage] = useState(2);
  const pageHandler = () => {
    setPage((currentValue) => currentValue + 1);
    dispatch(fetchSearch(value, page));
  };

  //check if there is no product to show
  if(pager?.total_items === 0) return <Error>موردی یافت نشد</Error>

  return (
    <>
      <ResultsContainer>
        {products?.map((product) => {
          const { id, status } = product;

          //check if the page is last page
          if (pager?.current_page + 1 === pager?.total_pages) return;
          //check if item is unavailavle
          if (status === "out_of_stock" || status === "in_supply") return;
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
      {products.length
        ? pager?.current_page < pager?.total_pages && (
            <LoadMoreButton
              disabled={loading ? true : false}
              onClick={pageHandler}
            >
              {loading ? "کمی صبر کنید ..." : "بیشتر"}
            </LoadMoreButton>
          )
        : ""}
        {
          error && <Error>{error}</Error>
        }
    </>
  );
};

export default Results;

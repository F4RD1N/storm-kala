import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearResults } from "../redux/Slices/searchSlice";

//state
import { useSearchState } from "../hooks";
const useResults = () => {
  const { pager } = useSearchState();
  const { query } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    query.q && dispatch(fetchSearch({query: query.q, page: 1}));
    return () => {
      dispatch(clearResults());
    };
  }, [query.q]);

  //page Handler
  const pageHandler = () => {
    dispatch(fetchSearch({query: query.q, page: pager?.current_page + 1}));
  };

  return {
    pageHandler,
  };
};

export default useResults;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../redux/search/searchAction";

//state
import { useSearchState } from "../hooks";
const useResults = () => {
  const { pager } = useSearchState();
  const { query } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    query.q && dispatch(fetchSearch(query.q));
    return () => {
      dispatch(clearSearch());
    };
  }, [query.q]);

  //page Handler
  const pageHandler = () => {
    dispatch(fetchSearch(query.q, pager?.current_page + 1));
  };

  return {
    pageHandler,
  };
};

export default useResults;

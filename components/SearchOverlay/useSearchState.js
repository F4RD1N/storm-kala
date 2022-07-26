import { useSelector } from "react-redux";

const useSearchState = () => {
  const state = useSelector((state) => state.searchState);
  return {
    loading: state.loading,
    error: state.error,
    filters: state.results?.filters,
    products: state?.products,
    sort: state.results?.sort,
    sortOptions: state.results?.sortOptions,
    didYouMean: state.results?.didYouMean,
    relatedWords: state.results?.relatedWords,
    searchInstead: state.results?.searchInstead,
    resultType: state.results?.resultType,
    pager: state.results?.pager,
  };
};

export default useSearchState;

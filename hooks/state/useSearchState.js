import { useSelector } from "react-redux";

const useSearchState = () => {
  const state = useSelector((state) => state.searchState);
  return {
    loading: state.loading,
    error: state.error,
  // array of objects are filtered by id because there are duplicate items in the api
    products: state?.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
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

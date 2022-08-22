import { useSelector } from "react-redux";

const useCategoryState = () => {
  const state = useSelector((state) => state.categoryState);

  // array of objects are filtered by id because there are duplicate items in the api
  return {
    loading: state.loading,
    error: state.error,
    title: state.title,
    products: state.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    pager: state.pager,
    seo: state.seo
  };
};

export default useCategoryState;

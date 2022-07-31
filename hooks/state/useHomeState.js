import { useSelector } from "react-redux";

const useHomeState = () => {
  const state = useSelector((state) => state.homeState);

  // array of objects are filtered by id because there are duplicate items in the api
  return {
    incredibleProducts: state.incredibleProducts?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    popularBrands: state.popularBrands?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    bestSellingProducts: state.bestSellingProducts?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    categories: state.categories?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    recommendationSubCategories: state.recommendationSubCategories?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    mobileList: state.mobileList?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    laptopList: state.laptopList?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    isLastPage: state.isLastPage
  };
};

export default useHomeState;

import { useSelector } from "react-redux";

const useHomeState = () => {
  const state = useSelector((state) => state.homeState);

  // array of objects are filtered by id because there are duplicate items in the api
  return {
    incredible: {
      products: state.incredible.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.incredible.pager
    },
    bestSelling: {
      products: state.bestSelling.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.bestSelling.pager
    },
    popularBrands: state.popularBrands?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    categories: state.categories?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    recommendationSubCategories: state.recommendationSubCategories?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    mobileList: {
      products: state.mobileList.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.mobileList.pager
    },
    laptopList: {
      products: state.laptopList.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.laptopList.pager
    },

  };
};

export default useHomeState;

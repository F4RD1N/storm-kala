import { useSelector } from "react-redux";

const useHomeState = () => {
  const state = useSelector((state) => state.homeState);

  // array of objects are filtered by id because there are duplicate items in the api
  return {
    incredible: {
      loading: state.incredible.loading,
      url: state.incredible.url,
      type: state.incredible.type,
      products: state.incredible.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.incredible.pager
    },
    bestSelling: {
      loading: state.bestSelling.loading,
      url: state.bestSelling.url,
      type: state.bestSelling.type,
      products: state.bestSelling.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.bestSelling.pager
    },
    popularBrands: state.popularBrands?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    categories: state.categories?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    recommendationSubCategories: state.recommendationSubCategories?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
    mobile: {
      loading: state.mobile.loading,
      url: state.mobile.url,
      type: state.mobile.type,
      products: state.mobile.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.mobile.pager
    },
    laptop: {
      loading: state.laptop.loading,
      url: state.laptop.url,
      type: state.laptop.type,
      products: state.laptop.products?.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i),
      pager: state.laptop.pager
    },
    banners: state.banners
  };
};

export default useHomeState;

import { useSelector } from "react-redux";

const useHomeState = () => {
  const state = useSelector((state) => state.homeState);

  return {
    incredibleProducts: state.incredibleProducts,
    popularBrands: state.popularBrands,
    bestSellingProducts: state.bestSellingProducts,
    categories: state.categories,
    recommendationSubCategories: state.recommendationSubCategories,
    mobileList: state.mobileList,
    laptopList: state.laptopList
  };
};

export default useHomeState;

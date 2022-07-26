const homePreset = ({
  incredible_products,
  popular_brands,
  best_selling_products,
  main_categories,
  recommendation_sub_categories,
}, mobileList, laptopList) => {
  return {
    incredibleProducts: incredible_products.products,
    popularBrands: popular_brands.brands,
    bestSellingProducts: best_selling_products.products,
    categories: main_categories.categories.slice(0, 8),
    recommendationSubCategories: recommendation_sub_categories,
    mobileList: mobileList.data.products,
    laptopList: laptopList.data.products,
  };
};

export default homePreset;

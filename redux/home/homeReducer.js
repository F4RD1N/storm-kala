const initialState = {
    incredibleProducts: [],
    popularBrands: [],
    bestSellingProducts: [],
    categories: [],
    mobileList: [],
    laptopList: []
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_HOME_DATA":
        return {...action.payload};
      case 'PUSH_INCREDIBLE':
        return {...state, incredibleProducts: [...state.incredibleProducts, ...action.payload]}
        case 'PUSH_BEST_SELLING':
        return {...state, bestSellingProducts: [...state.bestSellingProducts, ...action.payload]}
        case 'PUSH_MOBILE':
          return {...state, mobileList: [...state.mobileList, ...action.payload]}
      case 'PUSH_LAPTOP':
          return {...state, laptopList: [...state.laptopList, ...action.payload]}
      default:
          return state
    }
  };
  
  
  export default homeReducer
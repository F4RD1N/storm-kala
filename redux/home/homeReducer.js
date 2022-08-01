const initialState = {
    incredible: {},
    bestSelling: {},
    popularBrands: [],
    categories: [],
    mobileList: {},
    laptopList: {},
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_HOME_DATA":
        return {...action.payload};
      case 'PUSH_INCREDIBLE':
        return {...state, incredible: {...state.incredible, products:[...state.incredible.products, ...action.payload.products], pager: {...action.payload.pager}}}
        case 'PUSH_BEST_SELLING':
        return {...state, bestSelling: {...state.bestSelling, products:[...state.bestSelling.products, ...action.payload.products], pager: {...action.payload.pager}}}
        case 'PUSH_MOBILE':
          return {...state, mobileList: {...state.mobileList, products:[...state.mobileList.products, ...action.payload.products], pager: {...action.payload.pager}}}
      case 'PUSH_LAPTOP':
          return {...state, laptopList: {...state.laptopList, products:[...state.laptopList.products, ...action.payload.products], pager: {...action.payload.pager}}}
      default:
          return state
    }
  };
  
  
  export default homeReducer
const initialState = {
    incredibleProducts: {},
    popularBrands: {},
    bestSellingProducts: {},
    categories: {},
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_HOME_DATA":
        return action.payload;
      default:
          return state
    }
  };
  
  
  export default homeReducer
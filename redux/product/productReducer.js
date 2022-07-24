const initialState = {
  product: {},
  recommendations: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return action.payload;
    default:
        return state
  }
};


export default productReducer
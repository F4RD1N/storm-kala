const initialState = {
  product: {},
  recommendations: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...action.payload };
    case "PUSH_COMMENTS":
      return { ...state, product:{...state.product, comments: [...state.product.comments, ...action.payload]} };
    default:
      return state;
  }
};

export default productReducer;


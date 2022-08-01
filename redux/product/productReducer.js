const initialState = {
  product: {},
  recommendations: {},
  seo: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...action.payload };
    case "PUSH_COMMENTS":
      return {
        ...state,
        product: {
          ...state.product,
          comments: {...state.product.comments, comments: [...state.product.comments.comments, ...action.payload.comments], pager:{...action.payload.pager}},
        },
      };
    
    default:
      return state;
  }
};

export default productReducer;


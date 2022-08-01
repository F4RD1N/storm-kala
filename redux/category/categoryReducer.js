const initialState = {
  loading: false,
  products: [],
  filters: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_DATA":
      return { ...action.payload };
    case "PUSH_CATEGORY":
      return { ...state, products: [...state.products, ...action.payload] };
    default:
      return state;
  }
};

export default categoryReducer;

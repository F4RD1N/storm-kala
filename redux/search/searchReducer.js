const initalState = {
  loading: false,
  results: [],
  products: [],
  error: null,
};

const searchReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        results: action.payload,
        products: [...state.products,...action.payload.products],
        error: null,
      };
    case "FETCH_SEARCH_FAILURE":
      return {
        ...state,
        loading: false,
        results: [],
        error: action.payload,
      };
    case "CLEAR_SEARCH":
      return {
        loading: false,
        results: [],
        products: [],
        error: null,
      };
    default:
      return state;
  }
};

export default searchReducer;

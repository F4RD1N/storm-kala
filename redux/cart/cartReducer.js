const initialState = {
  cartItems: [],
  itemsCounter: 0,
  total: 0,
  //   checkout: false,
};

const cartReducer = (state = initialState, action) => {
  const indexItem = state.cartItems.findIndex(
    (item) => item.id === action.payload.id
  );
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        itemsCounter: state.itemsCounter + 1,
        total: state.total + action.payload.price.selling_price,
      };
    case "REMOVE_ITEM":
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...newItems],
        itemsCounter: state.itemsCounter - 1,
        total: state.total - action.payload.price.selling_price,
      };
    case "INCREASE":
      return {
        ...state,
        cartItems: state.cartItems.map((item, index) =>
          index === indexItem ? { ...item, quantity: item.quantity + 1 } : item
        ),
        itemsCounter: state.itemsCounter + 1,
        total: state.total + action.payload.price.selling_price,
      };
    case "DECREASE":
      return {
        ...state,
        cartItems: state.cartItems.map((item, index) =>
          index === indexItem ? { ...item, quantity: item.quantity - 1 } : item
        ),
        itemsCounter: state.itemsCounter - 1,
        total: state.total - action.payload.price.selling_price,
      };
    case "CLEAR":
      return {
        cartItems: [],
        cartItems: [],
        itemsCounter: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;


const initialState = {
  cartItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartReducer = (state = initialState, action) => {
    const indexItem = state.cartItems.findIndex(item => item.id === action.payload)
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_ITEM':
        const newItems = state.cartItems.filter(item => item.id !== action.payload)
        return {
            ...state,
            cartItems: [...newItems]
        }
    case 'INCREASE':
        return {
            ...state,
            cartItems: state.cartItems.map((item, index) => index === indexItem ? {...item, quantity: item.quantity + 1} : item),
        }
    case 'DECREASE':
        return {
            ...state,
            cartItems: state.cartItems.map((item, index) => index === indexItem ? {...item, quantity: item.quantity - 1} : item),
        }
    default:
      return state;
  }
};

export default cartReducer;

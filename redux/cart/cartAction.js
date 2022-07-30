export const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};

export const increase = (product) => {
  return {
    type: "INCREASE",
    payload: product,
  };
};

export const decrease = (product) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};

export const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR",
  };
};


export const broadCastCart = (data) => {
  return {
    type: 'BROADCAST_CART',
    payload: data
  }
}

export const setDiscount = (value) => {
  return {
    type: 'SET_DISCOUNT',
    payload: value
  }
}
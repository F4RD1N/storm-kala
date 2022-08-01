export const getCategoryData = (data) => {
  return {
    type: "GET_CATEGORY_DATA",
    payload: data,
  };
};

export const pushCategory = (items) => {
  return {
    type: "PUSH_CATEGORY",
    payload: items,
  };
};

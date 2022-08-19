import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: { comments: {} },
  recommendations: {},
  seo: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      return {...action.payload}
    },
    pushComments: (state, action) => {
      state.product.comments.comments.push(...action.payload.comments);
      state.product.comments.pager = action.payload.pager;
    },
  },
});

export default productSlice.reducer;
export const { getProduct, pushComments } = productSlice.actions;
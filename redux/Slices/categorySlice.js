import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filters: [],
  pager: [],
  seo: {},
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getData: (state, action) => {
     return {...action.payload}
    },
    pushData: (state, action) => {
      state.products.push(...action.payload.products);
      state.pager = action.payload.pager;
    },
  },
});

export default categorySlice.reducer;
export const { getData, pushData } = categorySlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incredible: {},
  bestSelling: {},
  popularBrands: [],
  categories: [],
  mobileList: {},
  laptopList: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.incredible = action.payload.incredible;
      state.bestSelling = action.payload.bestSelling;
      state.popularBrands = action.payload.popularBrands;
      state.categories = action.payload.categories;
      state.mobileList = action.payload.mobileList;
      state.laptopList = action.payload.laptopList;
    },
    pushIncredible: (state, action) => {
      state.incredible.products.push(...action.payload.products);
      state.incredible.pager = action.payload.pager;
    },
    pushBestSelling: (state, action) => {
      state.bestSelling.products.push(...action.payload.products);
      state.bestSelling.pager = action.payload.pager;
    },
    pushMobile: (state, action) => {
      state.mobileList.products.push(...action.payload.products);
      state.mobileList.pager = action.payload.pager;
    },
    pushLaptop: (state, action) => {
      state.laptopList.products.push(...action.payload.products);
      state.laptopList.pager = action.payload.pager;
    },
  },
});

export default homeSlice.reducer;
export const {
  getData,
  pushIncredible,
  pushBestSelling,
  pushMobile,
  pushLaptop,
} = homeSlice.actions;

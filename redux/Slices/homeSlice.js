import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  incredible: {},
  bestSelling: {},
  popularBrands: [],
  categories: [],
  mobile: {},
  laptop: {},
};

export const fetchPushData = createAsyncThunk(
  "home/fetchPushData",
  async (arg) => {
    const { url, type } = arg;
    return axios.get(url).then((response) => ({ ...response.data.data, type }));
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getData: (state, action) => {
      return { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPushData.pending, (state, action) => {
      state[action.meta.arg.type].loading = true;
    });
    builder.addCase(fetchPushData.fulfilled, (state, action) => {
      state[action.payload.type].loading = false;
      state[action.payload.type].products.push(...action.payload.products);
      state[action.payload.type].pager = action.payload.pager;
    });
    builder.addCase(fetchPushData.rejected, (state, action) => {
      state[action.meta.arg.type].loading = false;
      state[action.meta.arg.type].error = action.error.errMessage;
    });
  },
});

export default homeSlice.reducer;
export const { getData, pushData } = homeSlice.actions;

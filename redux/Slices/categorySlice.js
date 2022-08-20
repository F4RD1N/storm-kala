import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  products: [],
  filters: [],
  pager: [],
  seo: {},
};

export const fetchPushData = createAsyncThunk(
  "category/fetchPushData",
  async (arg) => {
    const { url } = arg;
    return axios.get(url).then((response) => response.data.data);
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getData: (state, action) => {
      return { ...action.payload };
    },
    pushData: (state, action) => {
      state.products.push(...action.payload.products);
      state.pager = action.payload.pager;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPushData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPushData.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(...action.payload.products);
      state.pager = action.payload.pager;
    });
    builder.addCase(fetchPushData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.errMessage;
    });
  },
});

export default categorySlice.reducer;
export const { getData, pushData } = categorySlice.actions;

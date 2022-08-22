import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: { comments: {} },
  recommendations: {},
  seo: {},
};

export const fetchPushComments = createAsyncThunk(
  "product/fetchPushComments",
  async (arg) => {
    const { url } = arg;
    return axios.get(url).then((response) => response.data.data);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      return { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPushComments.pending, (state) => {
      state.product.comments.loading = true;
    });
    builder.addCase(fetchPushComments.fulfilled, (state, action) => {
      state.product.comments.loading = false;
      if (action.payload.comments)
        state.product.comments.comments.push(...action.payload.comments);

      state.product.comments.pager = action.payload.pager;
    });
    builder.addCase(fetchPushComments.rejected, (state, action) => {
      state.product.comments.loading = false;
      state.product.comments.error = action.error.errMessage;
    });
  },
});

export default productSlice.reducer;
export const { getProduct } = productSlice.actions;

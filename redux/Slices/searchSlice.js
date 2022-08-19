import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  results: [],
  products: [],
  error: null,
};

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (arg) => {
    const { query, page } = arg;
    return axios
      .get(`search/?q=${query}&page=${page}`)
      .then((response) => response.data.data);
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearResults: () => {
      return {
        loading: false,
        results: [],
        products: [],
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.products.push(...action.payload.products);
      state.loading = false;
      state.results = action.payload;
    });
    builder.addCase(fetchSearch, (state, action) => {
      return {
        loading: false,
        results: [],
        products: [],
        error: action.error,
      };
    });
  },
});

export default searchSlice.reducer;

export const { clearResults } = searchSlice.actions;

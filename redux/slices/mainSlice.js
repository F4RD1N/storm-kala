import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  drawerStatus: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setDrawerStatus: (state) => {
      state.drawerStatus = !state.drawerStatus;
    },
  },
});

export default mainSlice.reducer;
export const { setTheme, setDrawerStatus } = mainSlice.actions;

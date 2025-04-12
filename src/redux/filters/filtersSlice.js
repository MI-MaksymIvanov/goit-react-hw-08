import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    findContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;

export const { findContact } = slice.actions;

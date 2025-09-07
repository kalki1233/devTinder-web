import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState: initialState,
  reducers: {
    saveFeed: (state, action) => {
      state.data = action.payload;
    },
    removeFeed: (state) => {
      state.data = null;
    },
  },
});

export const { removeFeed, saveFeed } = feedSlice.actions;

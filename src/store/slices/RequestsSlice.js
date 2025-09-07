import { createSlice } from "@reduxjs/toolkit";

export const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    saveRequests: (state, action) => action.payload,
    removeRequest: (state, action) => {
      return state.filter((connection) => connection._id !== action.payload);
    },
  },
});

export const { removeRequest, saveRequests } = requestsSlice.actions;

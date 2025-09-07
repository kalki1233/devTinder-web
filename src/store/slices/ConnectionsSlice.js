import { createSlice } from "@reduxjs/toolkit";

export const connectionsSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    saveConnections: (state, action) => action.payload,
    removeConnections: () => null,
  },
});

export const { removeConnections, saveConnections } = connectionsSlice.actions;

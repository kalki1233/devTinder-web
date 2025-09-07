import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    saveUser: (store, action) => {
      store.data = action.payload;
    },
    removeUser: (store) => {
      store.data = null;
    },
  },
});

export const { saveUser } = userSlice.actions;

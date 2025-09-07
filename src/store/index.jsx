import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { feedSlice } from "./slices/FeedSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    feed: feedSlice.reducer,
  },
});

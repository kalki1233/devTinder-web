import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { feedSlice } from "./slices/FeedSlice";
import { requestsSlice } from "./slices/RequestsSlice";
import { connectionsSlice } from "./slices/ConnectionsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    feed: feedSlice.reducer,
    connections: connectionsSlice.reducer,
    requests: requestsSlice.reducer,
  },
});

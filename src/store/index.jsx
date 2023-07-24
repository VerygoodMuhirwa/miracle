import { configureStore } from "@reduxjs/toolkit";
import { loggedInSlice } from "./reducers/LoggedInSlice";

export const store = configureStore({
  reducer: {
    logged: loggedInSlice.reducer,
  },
});

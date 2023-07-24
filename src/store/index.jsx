import { configureStore } from "@reduxjs/toolkit";
import { loggedInSlice } from "./slices/LoggedInSlice";
import { formData } from "./slices/formData";

export const store = configureStore({
  reducer: {
    logged: loggedInSlice.reducer,
    formData:formData.reducer
  },
});

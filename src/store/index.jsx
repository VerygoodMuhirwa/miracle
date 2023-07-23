import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "./reducers/testSlice";

 export const store=configureStore({
    reducer:{
        test:testSlice.reducer
    }
 })
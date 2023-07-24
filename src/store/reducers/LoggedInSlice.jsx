import { createSlice } from "@reduxjs/toolkit";

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    loggedIn: true,
    username: "veryGood",
  },
  reducers: {
    loggedUser: (state, action) => {
      state.loggedIn=true  
      state.username = action.payload;
    },
    signOut:(state)=>{
        state.loggedIn=false
    }
  },
});

export const loggedActions = loggedInSlice.actions;

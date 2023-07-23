import { createSlice } from "@reduxjs/toolkit";

export const testSlice=createSlice({
    name:"test",
    initialState:{
        name:"jonas"
    },
    reducers:{
        test:(state)=>{
            console.log(state.name);
        }
    }
})

export const testActions=testSlice.actions
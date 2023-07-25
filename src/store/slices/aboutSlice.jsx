import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
  name: "aboutSlice",
  initialState: {
    description:
      "I am a highly skilled full stack developer as well as a freelancer-based tutor and can teach you what you need.",
    selectedTime: [],
  },
  reducers: {
    updatedAbout: (state, action) => {
      const { description, selectedTime } = action.payload;
      state.description = description;
      state.selectedTime = selectedTime;
      console.log(state.description);
    },
  },
});

export const aboutActions = aboutSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export const userCredentials = createSlice({
  name: "userCredentials",
  initialState: {
    username: "No name",
    id: "sdxfcgvhbjnk",
    title: "No title",
    skills: "No skills",
    hoursRate: "15",
    countryInfo: {
      countryName: "Canada",
      city: "info",
      flag: "🇨🇦",
      time: "",
    },
    email: "dereckdavid@gmail.com",
    phoneNumber: "No phone Number",
    openToCollabrate: false,
  },
  reducers: {
    updateUserData: (state, action) => {
      const {
        username,
        title,
        skills,
        hoursRate,
        countryInfo,
        flag,
        time,
        email,
        phoneNumber,
        openToCollabrate,
      } = action.payload;

      // Update the state with the new values from the payload
      state.username = username;
      state.title = title;
      state.skills = skills;
      state.hoursRate = hoursRate;
      state.countryInfo = countryInfo;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.openToCollabrate = openToCollabrate;
    },
  },
});

export const userActions = userCredentials.actions;

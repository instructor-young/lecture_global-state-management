import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./slices/profile.slice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;

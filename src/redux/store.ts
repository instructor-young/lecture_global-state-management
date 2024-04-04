import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile.reducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;

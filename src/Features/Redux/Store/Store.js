import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Slices/LoginSlice/LoginSlice";
import LoggedInUserReucer from "../Slices/LoggedInUserSlice/LoggedInUserSlice";

export default configureStore({
  reducer: {
    Login: LoginReducer,
    LoggedInUser: LoggedInUserReucer,
  },
});

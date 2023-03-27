import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    logged_in: false,
  },
  reducers: {
    SetLoggedIn: (state) => {
      state.logged_in = !state.logged_in;
    },
    SetLoggedOut: (state) => {
      state.logged_in = !state.logged_in;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetLoggedIn, SetLoggedOut } = LoginSlice.actions;

export default LoginSlice.reducer;

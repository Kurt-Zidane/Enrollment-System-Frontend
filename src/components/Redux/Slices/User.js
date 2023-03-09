import { createSlice } from "@reduxjs/toolkit";

export const LoggedInUserSlice = createSlice({
  name: "Login",
  initialState: {
    value: {
      email: "",
      id: 0,
      username: "",
    },
  },
  reducers: {
    SetUser: (state, action) => {
      state.value = {
        email: action.payload.email,
        id: action.payload.id,
        username: action.payload.username,
      };
    },
    UnsetUser: (state) => {
      state.value = {
        email: "",
        id: 0,
        username: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetUser, UnsetUser } = LoggedInUserSlice.actions;

export default LoggedInUserSlice.reducer;

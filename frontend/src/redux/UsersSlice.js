import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users slice",
  initialState: {
    role: "",
  },
  reducers: {},
});

export const UsersActions = UsersSlice.actions;

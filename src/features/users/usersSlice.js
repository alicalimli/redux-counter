import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ali Calimli" },
  { id: "1", name: "Ali Calimli" },
  { id: "2", name: "Ali Calimli" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;

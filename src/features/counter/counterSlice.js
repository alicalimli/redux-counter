import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducer:{
    increment: (state) => state += 1,
    decrement: (state) => state -= 1,
  }
})

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;
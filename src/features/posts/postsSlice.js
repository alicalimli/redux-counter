import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "blahblahblah",
    content: "asfsdf",
  },
  {
    id: 2,
    title: "blahblahblah",
    content: "asfsdf",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

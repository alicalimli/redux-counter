import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id:1, title: "blahblahblah", content: "asfsdf",
  id:2, title: "blahblahblah", content: "asfsdf",
}]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
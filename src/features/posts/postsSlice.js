import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    addPost: {
      reducer: (state, action) => {
        console.log(action.payload);
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return { payload: { id: nanoid(), title, content, userId } };
      },
    },
  },
});

export const selectPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

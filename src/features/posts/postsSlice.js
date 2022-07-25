import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "blahblahblah",
    content: "asfsdf",
    dat: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "blahblahblah",
    content: "asfsdf",
    dat: sub(new Date(), { minutes: 20 }).toISOString(),
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
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

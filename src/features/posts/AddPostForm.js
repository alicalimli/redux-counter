import { useState } from "react";
import { useDispatch } from "react-redux";
import { uid } from "@reduxjs/toolkit";

import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost({ id: uid, title, content }));

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleAddPost}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button>Add Post</button>
      </form>
    </section>
  );
};
export default AddPostForm;

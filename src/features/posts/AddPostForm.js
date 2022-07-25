import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../users/usersSlice";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setContent(e.target.value);

  const authorOptions = users.map((user) => (
    <option key={user.name + user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content));

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleAddPost}>
        <label htmlFor="author-name">Author</label>
        <select required>
          <option value=""></option>
          {authorOptions}
        </select>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          required
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          required
          value={content}
          onChange={onContentChanged}
        />
        <button>Add Post</button>
      </form>
    </section>
  );
};
export default AddPostForm;

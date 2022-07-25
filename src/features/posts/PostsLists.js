import React from "react";

import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import PostDate from "./PostDate";

const PostsLists = () => {
  const posts = useSelector(selectPosts);

  console.log(posts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <PostDate timestamp={post.date} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsLists;

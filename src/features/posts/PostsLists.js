import React from "react";

import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import PostDate from "./PostDate";
import ReactionButtons from "./ReactionButtons";

const PostsLists = () => {
  const posts = useSelector(selectPosts);

  const orderedPosts = posts.slice().sort((a, b) => {
    return b.date.localeCompare(a.date);
  });

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">
        {post.content.substring(0, 100)}
        {post.content.length === 100 && "............."}
      </p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <PostDate timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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

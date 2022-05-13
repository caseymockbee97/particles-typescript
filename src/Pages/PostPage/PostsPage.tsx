import React from "react";
import PostComponent from "../../Components/PostComponent/PostComponent";
import { Data } from "../../TempData/testData";
import "./styles.css";

export default function PostsPage() {
  return (
    <div className="posts-container">
      {Data.posts.map((post) => (
        <div className="individual-post" key={post.id}>
          <PostComponent className="post" post={post} />
        </div>
      ))}
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function PostComponent({ post }: any) {
  const { title, image, body } = post;

  return (
    <div className="post-container">
      <h2 className="title">{title}</h2>
      {image && <img className="post-image" src={image} alt={body} />}
      <p className={image ? "body" : "body no-image"}>{body}</p>
    </div>
  );
}

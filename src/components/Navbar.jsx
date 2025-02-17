import React from "react";

export default function Navbar({ postsLiked }) {
  return (
    <div className="nav">
      <h1>here are the liked posts : {postsLiked}</h1>
    </div>
  );
}

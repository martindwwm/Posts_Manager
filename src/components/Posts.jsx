import React from "react";

export default function Posts({ data, liked, deletePosts }) {
  return (
    <div className={data.liked ? "post active" : "post"}>
      <div className="post-image">
        <img src={data.image} alt="post 1" />
      </div>

      <div className="text">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>

      <div className="btn">
        <button onClick={() => liked(data)}>
          {data.liked ? "Already liked" : "Like"}
        </button>
        <button className="delete" onClick={() => deletePosts(data.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

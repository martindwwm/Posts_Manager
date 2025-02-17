import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "src/assets/post-1.jpg",
      name: "Alfred Kenneally",
      description:
        "nous avons eu la chance de faire ce petit voyage en mode tout doux le loup",
      liked: false,
    },
    {
      id: 2,
      image: "src/assets/post-2.jpg",
      name: "Antoine Beauvilain",
      description:
        "nous avons eu la chance de faire ce petit voyage en mode tout doux le loup",
      liked: false,
    },
    {
      id: 3,
      image: "src/assets/post-3.jpg",
      name: "Dan Imft",
      description:
        "nous avons eu la chance de faire ce petit voyage en mode tout doux le loup",
      liked: false,
    },
    {
      id: 4,
      image: "src/assets/post-4.jpg",
      name: "Kal Visuals",
      description:
        "nous avons eu la chance de faire ce petit voyage en mode tout doux le loup",
      liked: false,
    },
  ]);

  const liked = (data) => {
    const copyData = [...posts];
    const index = posts.indexOf(data);
    copyData[index] = { ...posts[index], liked: !posts[index].liked };
    setPosts(copyData);
  };

  const deletePosts = (id) => {
    const newPosts = posts.filter((p) => p.id != id);
    setPosts(newPosts);
  };

  const postsLiked = posts.filter((p) => p.liked);

  return (
    <div>
      <Navbar postsLiked={postsLiked.length} />
      <div className="app">
        {posts.map((p) => (
          <Posts data={p} key={p.id} liked={liked} deletePosts={deletePosts} />
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

const FetchWithUseState = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPosts(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPosts({});
        setError("Error Detected");
      });
  }, []);
  return (
    <div>
      <h5>Post by using useState wth useEffect</h5>
      <p>{loading ? "Loading........." : posts.body}</p>
      <p>{error || null}</p>
    </div>
  );
};

export default FetchWithUseState;

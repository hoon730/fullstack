import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const axiosData = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          setPosts(response.data);
        } catch (error) {}
      };
    };
  }, []);

  return (
    <div>
      <h2>post-axios</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosExample;

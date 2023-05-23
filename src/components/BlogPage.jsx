import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    })();
  }, []);

  return (
    <>
      <h1>Our news</h1>

      {posts.map(({ id, title }) => (
        <ul className="posts-list">
          <li className="post" key={id}>
            <Link className="post" to={`/blog/${id}`}>
              {title}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};
export default BlogPage;

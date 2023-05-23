import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(response.data);
    })();
  }, [id]);

  const goBack = () => navigate(-1);
  return (
    <div className="single-page">
      <button className="go-back-button" onClick={goBack}>
        Go back
      </button>
      {post && (
        <>
          <h1>{post.title} </h1>
          <p>{post.body}</p>

          <Link className="edit-post" to={`/blog/${id}/edit`}>
            <button type="button" className="edit-post">
              {`Edit post ${id}`}
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;

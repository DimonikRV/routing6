import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { fetchPost } from "../../gateways/gateways";

export const postLoader = async ({ params }) => {
  const id = params.id;
  const post = await fetchPost(id);
  return { post, id };
};

const SinglePage = () => {
  const { post, id } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div className="single-page">
      <button className="go-back-button" onClick={goBack}>
        Go back
      </button>
      <h1>{post.title} </h1>
      <p>{post.body}</p>
      <Link to="/blog/new">
        <button type="button" className="edit-post">
          {`Edit post ${id}`}
        </button>
      </Link>
    </div>
  );
};

export default SinglePage;
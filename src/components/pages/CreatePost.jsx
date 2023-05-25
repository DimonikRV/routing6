import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1>Create Post</h1>
      <button
        onClick={() => {
          signout(() => navigate("/", { replace: true }));
        }}
      >
        Sign out
      </button>
    </>
  );
};
export default CreatePost;

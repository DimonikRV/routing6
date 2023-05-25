import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
const CreateComment = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1>Create Comment</h1>
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
export default CreateComment;

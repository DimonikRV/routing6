import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = event.target.username.value;
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Loginpage;

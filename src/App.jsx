import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import BlogPage from "./components/pages/BlogPage";
import SinglePage from "./components/pages/SinglePage";
import EditPost from "./components/pages/EditPost";
import NotfoundPage from "./components/pages/NotfoundPage";
import "./index.scss";
import Layout from "./components/Layout";
import Loginpage from "./components/pages/Loginpage";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";
import CreatePost from "./components/pages/CreatePost";
import { blogLoader } from "./components/pages/BlogPage";
import { postLoader } from "./components/pages/SinglePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<BlogPage />} loader={blogLoader} />
      <Route path="blog/:id" element={<SinglePage />} loader={postLoader} />
      <Route path="blog/:id/edit" element={<EditPost />} />
      <Route
        path="blog/new"
        element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Loginpage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

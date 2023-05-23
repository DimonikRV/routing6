import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import BlogPage from "./components/BlogPage";
import SinglePage from "./components/SinglePage";
import EditPost from "./components/EditPost";
import NotfoundPage from "./components/NotfoundPage";
import "./index.scss";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="blog" element={<BlogPage />}></Route>
          <Route path="blog/:id" element={<SinglePage />}></Route>
          <Route path="blog/:id/edit" element={<EditPost />}></Route>
          <Route path="*" element={<NotfoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

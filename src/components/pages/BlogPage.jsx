import { Suspense } from "react";
import {
  Link,
  Await,
  useSearchParams,
  useLoaderData,
  defer,
} from "react-router-dom";
import BlogFilter from "../BlogFilter";
import { fetchPosts } from "../../gateways/gateways";

export const blogLoader = () => {
  const posts = fetchPosts();
  return defer({
    posts,
  });
};

const BlogPage = () => {
  const { posts } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");
  const startsFrpm = latest ? 80 : 1;

  return (
    <>
      <h1>Our news</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <ul className="posts-list">
              {resolvedPosts
                .filter(
                  (post) =>
                    post.title.includes(postQuery) && post.id >= startsFrpm
                )
                .map(({ id, title }) => (
                  <li className="post" key={id}>
                    <Link className="post" to={`/blog/${id}`}>
                      {title}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default BlogPage;

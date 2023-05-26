import axios from "axios";

export const fetchPost = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/postss/${id}`
  );
  const post = response.data;

  return { post, id };
};

export const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/postss"
  );

  return response.data;
};

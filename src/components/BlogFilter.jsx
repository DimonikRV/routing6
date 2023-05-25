import { useState } from "react";

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { search, latest } = event.target;
    const query = search.value;
    const isLatest = latest.checked;

    const params = {};
    if (query.length) {
      params.post = query;
    }
    if (isLatest) {
      params.latest = true;
    }
    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="search"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="latest"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        New Only
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default BlogFilter;

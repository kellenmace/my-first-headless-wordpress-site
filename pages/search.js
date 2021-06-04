import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/Layout";
import PostsList from "../components/PostsList";

// Dummy data
import { posts } from "../dummy-data";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const loading = false;
  const error = false;
  const data = {
    posts: {
      nodes: posts,
    },
  };

  const havePosts = Boolean(data?.posts?.nodes.length);

  return (
    <Layout>
      <h1>Search</h1>
      <form
        className="search-form"
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.target);
          const values = Object.fromEntries(data);
          setSearchTerm(values["search-term"]);
        }}
      >
        <label htmlFor="search-input" className="screen-reader">
          🔍 Search
        </label>
        <input
          id="search-input"
          type="search"
          name="search-term"
          placeholder="🔍 Search"
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occurred :(</p>
      ) : !havePosts ? (
        <p>No posts found.</p>
      ) : (
        <PostsList posts={data.posts.nodes} />
      )}
    </Layout>
  );
}

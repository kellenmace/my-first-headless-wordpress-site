import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/Layout";
import PostsList from "../components/PostsList";

const SEARCH_POSTS = gql`
  query searchPosts($searchTerm: String!) {
    posts(where: { search: $searchTerm }) {
      nodes {
        databaseId
        title
        excerpt
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, data } = useQuery(SEARCH_POSTS, {
    variables: { searchTerm },
    notifyOnNetworkStatusChange: true,
  });

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

import { gql } from "@apollo/client";

import { client } from "../lib/apolloClient";
import Layout from "../components/Layout";
import PostsList from "../components/PostsList";

// Dummy data
import { posts } from "../dummy-data";

export default function Blog(props) {
  const { posts } = props;

  return (
    <Layout>
      <h1>Blog</h1>
      <PostsList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: posts,
    },
  };
}

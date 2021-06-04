import { gql } from "@apollo/client";
import parse from "html-react-parser";

import { client } from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import PostsList from "../../components/PostsList";

// Dummy data
import { category } from "../../dummy-data";

export default function SingleCategory({ category }) {
  return (
    <Layout>
      <h1>{parse(category.name)}</h1>
      <PostsList posts={category.posts.nodes} />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  if (!category) {
    return { notFound: true };
  }

  return {
    props: { category },
    revalidate: 60,
  };
}

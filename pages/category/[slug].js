import { gql } from "@apollo/client";
import parse from "html-react-parser";

import { client } from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import PostsList from "../../components/PostsList";

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

const GET_CATEGORY = gql`
  query getCategory($slugId: ID!, $slugName: String!) {
    category(id: $slugId, idType: SLUG) {
      name
      posts(first: 18, after: null, where: { categoryName: $slugName }) {
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
  }
`;

export async function getStaticProps(context) {
  const { slug } = context.params;

  const response = await client.query({
    query: GET_CATEGORY,
    variables: {
      slugId: slug,
      slugName: slug,
    },
  });

  const category = response?.data?.category;

  if (!category) {
    return { notFound: true };
  }

  return {
    props: { category },
    revalidate: 60,
  };
}

import { gql } from "@apollo/client";
import parse from "html-react-parser";
import Link from "next/link";

import { client } from "../lib/apolloClient";
import Layout from "../components/Layout";

// Dummy data
import { post } from "../dummy-data";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function SinglePost({ post }) {
  const { date, title, content, author, categories } = post;
  const haveCategories = Boolean(categories?.nodes?.length);

  return (
    <Layout>
      <article className="blog-post">
        <h1>{title}</h1>
        <p className="post-meta">
          ✍️ {author.node.name} on {formatDate(date)}
        </p>
        <div>{parse(content)}</div>
        {haveCategories ? (
          <div className="category-list">
            <h4>Categorized As</h4>
            <ul>
              {categories.nodes.map((category) => {
                const { slug, name } = category;
                return (
                  <li key={slug}>
                    <Link href={`/category/${slug}`}>
                      <a>
                        <li>{name}</li>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </article>
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
  const uri = context.params.uri.join("/");

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 60,
  };
}

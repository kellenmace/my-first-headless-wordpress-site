import Link from "next/link";
import parse from "html-react-parser";
import { gql } from "@apollo/client";

export default function PostCard({ post }) {
  const { title, excerpt, uri, featuredImage } = post;

  return (
    <article className="post-card">
      {featuredImage ? (
        <div className="post-card__featured-image">
          <Link href={uri}>
            <a>
              <img
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText}
              />
            </a>
          </Link>
        </div>
      ) : null}
      <h2>
        <Link href={uri}>
          <a>{title}</a>
        </Link>
      </h2>
      <div>{parse(excerpt)}</div>
    </article>
  );
}

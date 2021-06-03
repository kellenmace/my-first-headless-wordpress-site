import PostCard from "./PostCard";

export default function PostsList({ posts }) {
  return (
    <ul className="posts-list">
      {posts.map((post) => {
        return (
          <li key={post.databaseId}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}

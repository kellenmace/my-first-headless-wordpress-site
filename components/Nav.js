import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

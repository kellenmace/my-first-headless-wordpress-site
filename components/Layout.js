import Head from "next/head";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Headless WP App</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}

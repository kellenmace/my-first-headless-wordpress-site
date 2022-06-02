# My First Headless WordPress Site

Next.js app repo for the [React Summit](https://reactsummit.com/) workshop on June 2nd, 2022 and the [WordSesh](https://wordsesh.com/) workshop on June 4th, 2021.

## Local Setup

1. Clone down this repo.
1. `cd` into it and run `npm install` to install its dependencies.
1. Create a new `.env.local` file in the root folder with this as its contents: `NEXT_PUBLIC_WORDPRESS_API_URL=https://content.wpgraphql.com/graphql`. If you want to point the Next.js app to a local WordPress install, swap out `https://content.wpgraphql.com` with the domain for your local WordPress site (optional).
1. If you're using a local WordPress install, make sure you have the [WPGraphQL plugin](https://wordpress.org/plugins/wp-graphql/) installed and activated.
1. Run `npm run dev` to get the app up and running at http://localhost:3000. You can stop the app at any time by hitting `ctrl` + `c`.

## Checkpoints

You can check out these commits in git to get caught up if you fall behind at any point.

1. Blog index page: `05c3d27`
1. Single blog post page: `8b4bc54`
1. Single category page: `8d4a35b`
1. Search page: `c2d2b40`
1. Fragments: `d900a29`

# My First Headless WordPress Site

Next.js app repo for the [WordSesh](https://wordsesh.com/) workshop on June 4th, 2021.

## Local Setup

1. Clone down this repo.
1. `cd` into it and run `npm install` to install its dependencies.
1. Create a new `.env.local` file in the root folder with this as its contents: `NEXT_PUBLIC_WORDPRESS_API_URL=https://content.wpgraphql.com/graphql`. If you want to point the Next.js app to a local WordPress install, swap out `https://content.wpgraphql.com` with the domain for your local WordPress site.
1. If you're using a local WordPress install, make sure you have the [WPGraphQL plugin](https://wordpress.org/plugins/wp-graphql/) installed and activated.
1. Run `npm run dev` to get the app up and running at http://localhost:3000. You can stop the app at any time by hitting `ctrl` + `c`.

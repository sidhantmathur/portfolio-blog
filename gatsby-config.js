module.exports = {
  siteMetadata: {
    title: `Blog by Sidhant`,
    name: `Sidhant`,
    siteUrl: `https://blog.sidhantm.com`,
    description: `Blog of web developer Sidhant Mathur discussing code, no-code, and digital marketing`,
    hero: {
      heading: `Learning about myself and how I think about tech.`,
      maxWidth: 652,
    },
    social: [
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/narative`,
      // },
      {
        name: `github`,
        url: `https://github.com/sidhantmathur`,
      },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/narative.co`,
      // },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sidhantmathur/`,
      },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

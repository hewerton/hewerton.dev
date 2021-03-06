module.exports = {
  siteMetadata: {
    title: `Hewerton Oliveira`,
    position: `Software Engineer`,
    description: `A blog about my studies.`,
    author: `@hewerton`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // --- gatsby-image ---
    // is a package that includes a component
    // to use in the view
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // ---

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    `gatsby-plugin-styled-components`,
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }
  ], 
  siteMetadata: {
    title: 'Sura Gatsby starter',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021',
    contact: 'sk@sura.me'
  },
}

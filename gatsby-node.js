const path = require(`path`)

// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('src/templates/projectDetails.js'),
      context: { slug: node.frontmatter.slug },
    })
  })
}

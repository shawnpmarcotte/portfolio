const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const deepMap = require("deep-map");
  const normalize = require("gatsby-source-contentful/normalize");

  // Contentful: This fixed the max call
  normalize.fixIds = (object) => {
    const out = deepMap(object, (v, k) => (k === "id" ? normalize.fixId(v) : v));
    return {
      ...out,
      sys: {
        ...out.sys,
        contentful_id: object.sys.id,
      },
    };
  };

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        pagePath: path,
      }, // additional data can be passed via context
    })
  })
}
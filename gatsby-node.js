const path = require('path');

exports.createPages = async ({ graphql, actions, reporter}) => {
  const result = await graphql(`
  {
    allGhostPost(sort: { order: ASC, fields: [published_at] }) {
      edges {
        node {
          slug
          id
          uuid
          title
          html
          visibility
        }
      }
    }
  }
  `)
}
const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);
const {kebabCase} = require('lodash');

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);
  const categoryTemplate = path.resolve('src/templates/category.tsx');

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
              }
            }
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Extract categories data from query
  const categories = result.data.categoriesGroup.group;
  // Make category pages
  categories.forEach((category) => {
    createPage({
      path: `/blog/category/${kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

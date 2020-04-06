import {graphql} from 'gatsby';
import React from 'react';
import BlogCategories from '../components/BlogCategories';
import BlogPopular from '../components/BlogPopular';
import SidebarLayout from '../components/Layout/sidebar';
import PostThumbnail from '../components/PostThumbnail';
import SEO from '../components/Seo';

interface Props {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: Location;
}

const BlogIndex = ({data, location}: Props) => {
  const posts = data.allMarkdownRemark.edges;
  const title = <h1>Blog</h1>;

  const sidebar = (
    <>
      <div>
        <BlogCategories />
      </div>
      <div>
        <BlogPopular />
      </div>
    </>
  );

  return (
    <SidebarLayout sidebar={sidebar} headerTitle={title}>
      <SEO title="Blog" />
      {posts.map(({node}: any) => (
        <PostThumbnail key={node.fields.slug} post={node} />
      ))}
    </SidebarLayout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
          }
        }
      }
    }
  }
`;

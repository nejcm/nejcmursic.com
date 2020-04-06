import styled from '@emotion/styled';
import {graphql} from 'gatsby';
import React from 'react';
import {Col, Row} from 'react-grid-system';
import BlogCategories from '../components/BlogCategories';
import BlogPopular from '../components/BlogPopular';
import SidebarLayout from '../components/Layout/sidebar';
import PostThumbnail from '../components/PostThumbnail';
import SEO from '../components/Seo';

interface Props {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: Array<{
        node: {
          frontmatter: {
            title: string;
          };
          fields: {
            slug: string;
          };
        };
      }>;
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    category: string;
  };
  location: Location;
}

export const Right = styled.div`
  padding: 0.3rem 0;
  text-align: right;
  font-size: 1.1rem;
  font-weight: normal;
`;

const CategoryTemplate = ({pageContext, data, location}: Props) => {
  const {category} = pageContext;
  const {edges, totalCount} = data.allMarkdownRemark;
  const title = (
    <Row align="center" justify="between">
      <Col>
        <h1>{category}</h1>
      </Col>
      <Col>
        <Right>
          {totalCount} article{totalCount > 1 ? 's' : ''}
        </Right>
      </Col>
    </Row>
  );
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
      <SEO title={category} />
      {edges.map(({node}: any) => (
        <PostThumbnail key={node.fields.slug} post={node} />
      ))}
    </SidebarLayout>
  );
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {category: {in: [$category]}}}
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

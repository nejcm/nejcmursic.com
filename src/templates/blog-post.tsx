import styled from '@emotion/styled';
import {get} from '@nejcm/js-helpers';
import {graphql, Link} from 'gatsby';
import {kebabCase} from 'lodash';
import React from 'react';
import Scrollspy from 'react-scrollspy';
import theme from '../../config/theme';
import SidebarLayout from '../components/Layout/sidebar';
import Post from '../components/Post';
import SEO from '../components/Seo';
import Tag, {TagList} from '../components/Tag';
const maxHeader = 4;

interface Props {
  data: {
    markdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: any;
  location: Location;
}

interface Heading {
  depth: number;
  value: string;
}

const Toc = styled.nav`
  ul {
    list-style: none;

    li {
      margin-bottom: 0;
      line-height: 1.25;
      font-size: 0.95rem;

      .inner {
        margin-left: 1rem;
      }

      a {
        display: block;
        padding: 0.5rem 0;
        font-size: 1.05em;
        color: ${(props: {theme: {dark: number}}) =>
          props.theme.dark
            ? theme.colors.gray_darker
            : theme.colors.gray_darkest};

        &:hover {
          color: ${(props: {theme: {dark: number}}) =>
            props.theme.dark ? theme.colors.gray : theme.colors.black};
        }
      }

      &.current {
        a {
          color: ${theme.colors.primary};
        }
      }
    }
  }
`;
const Navigation = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    font-size: 1.2rem;
  }
`;
const HeaderTagList = styled(TagList)`
  position: relative;
  margin-left: -7px;
  font-size: 1.3rem;
`;
const Sticky = styled.div`
  position: sticky;
  top: 5rem;
  padding-top: -5rem;
`;

const BlogPostTemplate = ({data, pageContext, location}: Props) => {
  const post = data.markdownRemark;
  const {previous, next} = pageContext;
  const headings: Array<Heading> = get(post, 'headings', []).filter(
    (heading: Heading) => heading.depth <= maxHeader,
  );

  const title = (
    <>
      <h1 style={{paddingBottom: 8}}>{post.frontmatter.title}</h1>
      <HeaderTagList>
        {post.frontmatter.category.map((category: string) => (
          <Link to={`/blog/category/${kebabCase(category)}`} key={category}>
            <Tag>{category}</Tag>
          </Link>
        ))}
      </HeaderTagList>
    </>
  );

  const sidebar = (
    <Sticky>
      <h3 className="secondary">TABLE OF CONTENTS</h3>
      <Toc>
        {
          <Scrollspy
            items={headings.map((heading: Heading) => kebabCase(heading.value))}
            currentClassName="current"
          >
            {headings.map((heading, i) => (
              <li key={i}>
                <a
                  href={`#${kebabCase(heading.value)}`}
                  className={`secondary ${heading.depth > 2 ? 'inner' : ''}`}
                >
                  {heading.value}
                </a>
              </li>
            ))}
          </Scrollspy>
        }
      </Toc>
    </Sticky>
  );

  return (
    <SidebarLayout sidebar={sidebar} headerTitle={title} hideOnMobile={true}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Post post={post} />
      <Navigation>
        <ul>
          <li>
            {previous && (
              <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Navigation>
    </SidebarLayout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      headings {
        depth
        value
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
    }
  }
`;

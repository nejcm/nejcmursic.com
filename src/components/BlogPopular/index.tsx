import {get} from '@nejcm/js-helpers';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {Wrapper} from './styles';

export interface BlogPopularProps {}

export interface PostSummary {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

const BlogPopular: React.SFC<BlogPopularProps> = () => {
  const data = useStaticQuery(popularQuery);

  return (
    <Wrapper>
      <h3 className="secondary">POPULAR</h3>
      <ul>
        {get(data, 'allMarkdownRemark.edges', []).map((post: PostSummary) => (
          <li key={post.node.fields.slug}>
            <h4>
              <Link
                to={`/blog/${post.node.fields.slug}`}
                key={post.node.fields.slug}
              >
                {post.node.frontmatter.title}
              </Link>
            </h4>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default BlogPopular;

export const popularQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      sort: {fields: [frontmatter___featured, frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

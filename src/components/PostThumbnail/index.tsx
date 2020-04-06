import {Link} from 'gatsby';
import {Article} from './styles';

export interface PostThumbnailProps {
  post: {
    excerpt?: string;
    frontmatter: {
      title: string;
      description?: string;
      date: string;
    };
    fields: {
      slug: string;
    };
  };
}

const PostThumbnail: React.SFC<PostThumbnailProps> = ({post}) => {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <Article key={post.fields.slug}>
      <Link to={`/blog/${post.fields.slug}`}>
        <header>
          <h3>{title}</h3>
          <small>{post.frontmatter.date}</small>
        </header>
        <section>
          <p>{post.frontmatter.description || post.excerpt || ''}</p>
        </section>
        <footer>
          <strong className="read-more">
            Read more <span>→</span>
          </strong>
        </footer>
      </Link>
    </Article>
  );
};

export default PostThumbnail;

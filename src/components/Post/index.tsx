import {Wrapper} from './styles';

export interface PostProps {
  post: any;
}

const Post: React.SFC<PostProps> = ({post}) => {
  return (
    <Wrapper>
      <section dangerouslySetInnerHTML={{__html: post.html}} />
      <p className="date">Last updated: {post.frontmatter.date}</p>
      <hr />
    </Wrapper>
  );
};

export default Post;

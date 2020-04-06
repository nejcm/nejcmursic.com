import * as React from 'react';
import {Wrapper} from './styles';

export interface PostInterface {
  html: string;
  excerpt?: string;
  frontmatter: {
    title: string;
    description?: string;
    date: string;
  };
  fields: {
    slug: string;
  };
}

const Post: React.SFC<{post: PostInterface}> = ({post}) => {
  return (
    <Wrapper>
      <section dangerouslySetInnerHTML={{__html: post.html}} />
      <p className="date">Last updated: {post.frontmatter.date}</p>
      <hr />
    </Wrapper>
  );
};

export default Post;

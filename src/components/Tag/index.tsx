import {List, Wrapper} from './styles';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const TagList: React.SFC<TagProps> = (props) => {
  return <List {...props} />;
};

const Tag: React.SFC<TagProps> = (props) => {
  return <Wrapper {...props} />;
};

export default Tag;

import * as React from 'react';
import {List, Wrapper} from './styles';

export const TagList: React.SFC = (props) => {
  return <List {...props} />;
};

const Tag: React.SFC = (props) => {
  return <Wrapper {...props} />;
};

export default Tag;

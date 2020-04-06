import * as React from 'react';
import {Wrapper} from './styles';

const Card: React.SFC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return <Wrapper {...props} />;
};

export default Card;

import * as React from 'react';
import theme from '../../../config/theme';
import {Wrapper} from './styles';

type Sizes = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: keyof Sizes | number;
  padding?: boolean;
  style?: React.CSSProperties;
}

interface Component extends React.SFC<ContainerProps> {
  sizes: Sizes;
}

const Container: Component = ({size, style, ...rest}) => {
  const css = {
    maxWidth: size ? (typeof size === 'string' ? size : `${size}px`) : 'auto',
    ...style,
  };
  return <Wrapper style={css} {...rest} />;
};

Container.sizes = theme.breakpoints;

export default Container;

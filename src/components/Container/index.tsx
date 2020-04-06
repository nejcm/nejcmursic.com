import * as React from 'react';
import theme from '../../../config/theme';
import {Wrapper} from './styles';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: string | number;
  padding?: boolean;
  style?: object;
}

interface Sizes {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
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

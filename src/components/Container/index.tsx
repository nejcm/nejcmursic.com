import {measure2Css} from '@nejcm/js-helpers';
import theme from '../../../config/theme';
import {Wrapper} from './styles';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: string | number;
  padding?: boolean;
  style?: Object;
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

const Container: Component = ({size, padding = true, style, ...rest}) => {
  const css = {
    maxWidth: size ? measure2Css(size) : 'auto',
    ...style,
  };
  return <Wrapper style={css} {...rest} />;
};

Container.sizes = theme.breakpoints;

export default Container;

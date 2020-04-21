import * as React from 'react';
import theme from '../../../config/theme';

type values = keyof typeof theme.spacer;

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: values | Array<values | 0>;
  background?: string;
  style?: React.CSSProperties;
}

const Section: React.SFC<SectionProps> = ({
  size = 'lg',
  background,
  style,
  ...rest
}) => {
  const padding = Array.isArray(size)
    ? size.map((val) => `${val === 0 ? 0 : theme.spacer[val]}`).join(' ')
    : `${theme.spacer[size]} 0`;
  const internalStyle = {
    padding,
    background,
    ...style,
  };
  return <div style={internalStyle} {...rest} />;
};

export default Section;

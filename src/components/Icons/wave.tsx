import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Wave = ({color, ...rest}: Props) => (
  <svg width="512" height="35" viewBox="0 0 512 35" {...rest}>
    <path fill={color} d="M0,35L512,0.2l0,0H0V35z" />
  </svg>
);

export default Wave;

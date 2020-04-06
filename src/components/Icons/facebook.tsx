import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Facebook = ({color, ...rest}: Props) => (
  <svg width="1em" height="1em" viewBox="0 0 512 512" {...rest}>
    <path
      fill={color}
      d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c1.5,0,3,0,4.5-0.1V312.7h-55v-64.1h55v-47.2c0-54.7,33.4-84.5,82.2-84.5
	c23.4,0,43.5,1.7,49.3,2.5v57.2h-33.6c-26.5,0-31.7,12.6-31.7,31.1v40.8h63.5l-8.3,64.1h-55.2v189.5C433.7,471.4,512,372.9,512,256
	C512,114.6,397.4,0,256,0z"
    />
  </svg>
);

export default Facebook;

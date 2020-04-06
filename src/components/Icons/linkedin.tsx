import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Linkedin = ({color, ...rest}: Props) => (
  <svg width="1em" height="1em" viewBox="0 0 512 512" {...rest}>
    <path
      fill={color}
      d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M181.6,387h-62.3V199.4h62.3V387z
	 M150.4,173.8H150c-20.9,0-34.5-14.4-34.5-32.4c0-18.4,13.9-32.4,35.3-32.4c21.4,0,34.5,14,34.9,32.4
	C185.7,159.4,172.2,173.8,150.4,173.8z M406.4,387h-62.3V286.7c0-25.2-9-42.4-31.6-42.4c-17.2,0-27.5,11.6-32,22.8
	c-1.6,4-2.1,9.6-2.1,15.2V387h-62.3c0,0,0.8-170,0-187.6h62.3V226c8.3-12.8,23.1-31,56.2-31c41,0,71.8,26.8,71.8,84.4V387z"
    />
  </svg>
);

export default Linkedin;

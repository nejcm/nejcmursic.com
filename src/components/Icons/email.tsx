import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Email = ({color, ...rest}: Props) => (
  <svg width="1em" height="1em" viewBox="0 0 512 512" {...rest}>
    <path
      fill={color}
      d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M108.7,151.2c4.9-6.2,12.2-9.8,20-9.8
	h254.7c7.8,0,15.1,3.6,20,9.9c2.1,2.7,1.7,6.6-0.9,8.8c-42,35.5-115.6,98-137.2,117.5c-2.9,2.6-6,3.9-9.3,3.9s-6.3-1.3-9.3-3.9
	c-21.6-19.5-95.2-82-137.2-117.5C106.9,157.8,106.5,153.9,108.7,151.2z M103.2,330.4V185c0-2.5,1.4-4.8,3.7-5.8
	c2.3-1.1,4.9-0.7,6.8,0.9c27.5,23.3,63.6,54.1,91,77.6c1.4,1.3,2.3,3,2.2,5c-0.1,1.9-0.9,3.6-2.4,4.8
	c-25.4,20.3-63.6,48.2-91.2,68.1c-1.1,0.8-2.4,1.2-3.7,1.2c-1,0-2-0.2-2.9-0.7C104.5,335,103.2,332.8,103.2,330.4z M402,362.4
	c-4.8,5.2-11.6,8.2-18.6,8.2H128.7c-7,0-13.8-3-18.6-8.2c-1.3-1.3-1.9-3.1-1.7-5c0.2-1.8,1.1-3.5,2.6-4.5
	c26.7-19.1,75.9-54.7,105.1-78.4c2.4-2,5.9-1.9,8.2,0.1c5.7,5,10.6,9.3,14,12.3c10.5,9.5,25,9.5,35.5,0c3.4-3,8.2-7.3,14-12.3
	c2.3-2,5.8-2.1,8.2-0.1c29.3,23.8,78.4,59.4,105.1,78.4c1.5,1.1,2.4,2.7,2.7,4.5C403.9,359.3,403.3,361.1,402,362.4z M408.8,330.4
	c0,2.4-1.3,4.6-3.5,5.7c-1,0.5-1.9,0.7-2.9,0.7c-1.3,0-2.6-0.4-3.7-1.2c-27.6-19.9-65.8-47.8-91.2-68.1c-1.5-1.1-2.3-2.9-2.4-4.8
	c-0.1-1.9,0.8-3.7,2.2-5c27.3-23.5,63.5-54.3,91-77.5c1.9-1.6,4.5-2,6.8-0.9c2.3,1,3.7,3.3,3.7,5.8V330.4z"
    />
  </svg>
);

export default Email;

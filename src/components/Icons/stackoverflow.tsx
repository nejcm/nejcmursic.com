import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Stackoverflow = ({color, ...rest}: Props) => (
  <svg width="1em" height="1em" viewBox="0 0 512 512" {...rest}>
    <path
      fill={color}
      d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M253.2,134.8l114.5,97l-19,23.3
		l-114.5-97L253.2,134.8z M209.2,197.8l135.2,64.1l-12.5,27.4l0,0h0l0,0l-135.1-63.9L209.2,197.8z M183.7,266.4l145.9,31.2
		l-6.1,29.5l-145.9-31L183.7,266.4z M174.3,334.6h149.2v30H174.3V334.6z M382.9,425.4H114.8v-121h29.8v90.7h208.5v-90.7h29.8V425.4z
		 M373.3,226l-89-121.2l23.9-18.2l89,121.2L373.3,226z"
    />
  </svg>
);

export default Stackoverflow;

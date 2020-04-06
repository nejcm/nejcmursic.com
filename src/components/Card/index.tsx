import {Wrapper} from './styles';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {}

const Card: React.SFC<CardProps> = (props) => {
  return <Wrapper {...props} />;
};

export default Card;

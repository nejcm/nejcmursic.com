import * as React from 'react';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  value: number;
  color?: string;
  background?: string;
}

const Progress: React.SFC<ProgressProps> = ({
  value = 0,
  color = '#ccc',
  background = '#eee',
  ...rest
}) => {
  return (
    <div style={{height: 5, backgroundColor: background}} {...rest}>
      <div
        style={{
          width: `${value * 100}%`,
          height: '100%',
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default Progress;

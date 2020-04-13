import {render} from '@testing-library/react';
import React from 'react';
import Progress from '../Progress';

describe('Progress', () => {
  it('sets the width', () => {
    const value = 0.5;
    const {container} = render(<Progress value={value} />);

    const child = container.querySelector('div')?.querySelector('div');
    expect(child).toHaveStyle({
      width: `${value * 100}%`,
    });
  });
});

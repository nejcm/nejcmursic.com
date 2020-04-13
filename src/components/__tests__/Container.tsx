import {render} from '@testing-library/react';
import React from 'react';
import Container from '../Container';

describe('Container', () => {
  it('sets the width', () => {
    const {container, getByTestId} = render(
      <Container size={Container.sizes.lg}>
        <div data-testid="child" />
      </Container>,
    );
    expect(container.querySelector('div')).toHaveStyle({
      maxWidth: `${Container.sizes.lg}px`,
    });
    expect(getByTestId('child')).toBeInTheDocument();
  });
});

import {render} from '@testing-library/react';
import React from 'react';
import ErrorPage from '../404';

describe('404 component', () => {
  it('contains link to home page', () => {
    const {container} = render(<ErrorPage />);

    const link = container.querySelector("a[href='/']");
    expect(link).toBeInTheDocument();
  });
});

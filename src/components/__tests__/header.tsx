import {render} from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header headerTitle="Test title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains headerTitle', () => {
    const headerTitle = `Hello World`;
    const {getByText} = render(<Header headerTitle={headerTitle} />);

    const title = getByText(headerTitle);

    expect(title).toBeInTheDocument();
  });
});

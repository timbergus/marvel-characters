import React from 'react';
import { shallow } from 'enzyme';

import MarvelLogo from '../../src/components/marvel-logo';

describe('Loader', () => {
  test('should render the marvel logo.', () => {
    const component = shallow(<MarvelLogo />);
    expect(component).toMatchSnapshot();
  });
});

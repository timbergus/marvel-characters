import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../../src/components/loader';

describe('Loader', () => {
  test('should render correctly.', () => {
    const component = shallow(<Loader />);
    expect(component).toMatchSnapshot();
  });
});

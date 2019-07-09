import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../../src/components/loader';

describe('Loader', () => {
  test('should not react to the image load if size medium.', () => {
    const wrapper = shallow(<Loader size="medium" />);
    const loadSpy = jest.fn();

    global.scrollTo = loadSpy;

    wrapper.find('img').simulate('load');

    expect(loadSpy).not.toHaveBeenCalled();
  });

  test('should react to the image load if size small.', () => {
    const wrapper = shallow(<Loader size="small" />);
    const loadSpy = jest.fn();

    global.scrollTo = loadSpy;

    wrapper.find('img').simulate('load');

    expect(loadSpy).toHaveBeenCalled();
  });
});

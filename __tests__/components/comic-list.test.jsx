import React from 'react';
import { shallow } from 'enzyme';

import ComicList from '../../src/components/comic-list';

describe('Loader', () => {
  test('should render correctly.', () => {
    const comics = [{
      name: 'name',
    }];
    const component = shallow(<ComicList comics={comics} />);
    expect(component).toMatchSnapshot();
  });
});

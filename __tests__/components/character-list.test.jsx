import React from 'react';
import { shallow } from 'enzyme';

import CharacterList from '../../src/components/character-list';

describe('Loader', () => {
  test('should render correctly.', () => {
    const characters = [{
      id: 'id',
      name: 'name',
      thumbnail: 'thumbnail',
    }];
    const component = shallow(
      <CharacterList
        characters={characters}
        onSelectCharacter={() => {}}
        onLoadMoreCharacters={() => { }}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  test('should render correctly.', () => {
    const characters = [{
      id: 'id',
      name: 'name',
      thumbnail: 'thumbnail',
    }];
    const component = shallow(
      <CharacterList
        characters={characters}
        onSelectCharacter={() => { }}
        onLoadMoreCharacters={() => { }}
        loading
      />,
    );
    expect(component).toMatchSnapshot();
  });
});

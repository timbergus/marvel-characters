import React from 'react';
import { mount, shallow } from 'enzyme';

import CharacterList from '../../src/components/character-list';

describe('Loader', () => {
  const characters = [{
    id: 'id',
    name: 'name',
    thumbnail: 'thumbnail',
  }];

  test('should receive a click.', () => {
    const clickSpy = jest.fn();

    const wrapper = shallow(
      <CharacterList
        characters={characters}
        onSelectCharacter={clickSpy}
        onLoadMoreCharacters={() => {}}
      />,
    ).find('.list-item');

    expect(clickSpy).not.toHaveBeenCalled();

    wrapper.simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });

  test('should receive a scroll event.', () => {
    const map = {};
    const clickSpy = jest.fn();

    window.innerHeight = 100;
    window.pageYOffset = 100;

    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    mount(
      <CharacterList
        characters={characters}
        onSelectCharacter={() => {}}
        onLoadMoreCharacters={clickSpy}
      />,
    );

    map.scroll();

    expect(clickSpy).toHaveBeenCalled();
  });

  test('should avoid scroll event if loading.', () => {
    const map = {};
    const clickSpy = jest.fn();

    window.innerHeight = 100;
    window.pageYOffset = 100;

    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    mount(
      <CharacterList
        characters={characters}
        onSelectCharacter={() => { }}
        onLoadMoreCharacters={clickSpy}
        loading
      />,
    );

    map.scroll();

    expect(clickSpy).not.toHaveBeenCalled();
  });

  test('should be unmounted properly.', () => {
    const wrapper = shallow(
      <CharacterList
        characters={characters}
        onSelectCharacter={() => {}}
        onLoadMoreCharacters={() => {}}
        loading
      />,
    );

    wrapper.unmount();

    expect(wrapper.find('.list-item')).toHaveLength(0);
  });
});

import reducer, { setFilter } from '../../src/redux/reducers/filter';

describe('Profile reducer', () => {
  test('should return the correct action.', () => {
    const action = {
      type: 'marvel-characters/filter/SET_FILTER',
      data: {
        filter: 'filter',
      },
    };

    expect(setFilter('filter')).toEqual(action);
  });

  test('should return the correct initial state.', () => {
    const real = reducer();

    const initialState = {
      filter: '',
    };

    expect(real).toEqual(initialState);
  });

  test('should return the correct state for SET_FILTER.', () => {
    const real = reducer(undefined, {
      type: 'marvel-characters/filter/SET_FILTER',
      data: {
        filter: 'filter',
      },
    });

    const state = {
      filter: 'filter',
    };

    expect(real).toEqual(state);
  });
});

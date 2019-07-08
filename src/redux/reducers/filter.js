// @flow

const SET_FILTER = 'marvel-characters/filter/SET_FILTER';

export function setFilter(filter: String) {
  return { type: SET_FILTER, data: { filter } };
}

export default function reducer(state: Object = { filter: '' }, action: Object = {}) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, action.data);
    default:
      return state;
  }
}

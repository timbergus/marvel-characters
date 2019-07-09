import gql from 'graphql-tag';

// It is wrong coded:

// limit: is the offset.
// offset: is the limit.

export const GET_CHARACTERS = gql`
  query GET_CHARACTERS(
    $offset: Int
    $limit: Int
    $orderBy: CharacterOrderBy
  ) {
    characters(
      limit: $offset
      offset: $limit
      orderBy: $orderBy
    ) {
      id
      name
      thumbnail
    }
  }
`;

export const GET_CHARACTER_DETAIL = gql`
  query GET_CHARACTER_DETAIL($id: Int!) {
    characters(where: { id: $id }) {
      id
      name
      thumbnail
      description
    }
  }
`;

export const GET_CHARACTER_COMICS = gql`
  query GET_CHARACTER_COMICS($id: ID!) {
    comics(where: {
      characters: [$id]
    }) {
      id
      title
      thumbnail
    }
  }
`;

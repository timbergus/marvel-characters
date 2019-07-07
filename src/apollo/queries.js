import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
  query GET_CHARACTERS {
    characters {
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
      comics {
        name
      }
    }
  }
`;

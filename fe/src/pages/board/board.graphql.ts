import { gql } from "@apollo/client";

export const BOARDS = gql`
  query Board($id: ID!) {
    board(id: $id) {
      id
      name
      lists {
        id
        name
        items {
          id
          name
        }
      }
    }
  }
`;

export const ADD_LIST = gql`
  mutation AddList($input: AddListInput!) {
    addList(input: $input) {
      list {
        id
        board {
          id
          name
          lists {
            id
            name
          }
        }
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation AddItem($input: AddItemInput!) {
    addItem(input: $input) {
      item {
        id
        list {
          id
          name
          items {
            id
            name
          }
        }
      }
    }
  }
`;

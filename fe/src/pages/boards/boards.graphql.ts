import { gql } from "@apollo/client";

export const BOARDS = gql`
  query Boards {
    boards {
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

export const ADD_BOARD = gql`
  mutation AddBoards($input: AddBoardInput!) {
    addBoard(input: $input) {
      board {
        id
        name
      }
    }
  }
`;

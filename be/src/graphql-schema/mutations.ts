import { gql } from "apollo-server-koa";

import * as board from "./board";
import * as list from "./list";
import * as item from "./item";

export const schema = gql`
  input Add${board.TYPE}Input {
    name: String!
  }

  type ${board.TYPE}Payload {
    board: ${board.TYPE}
  }

  input Add${list.TYPE}Input {
    boardId: ID!
    name: String!
  }

  type ${list.TYPE}Payload {
    list: ${list.TYPE}
  }

  input Add${item.TYPE}Input {
    listId: ID!
    name: String!
  }

  type ${item.TYPE}Payload {
    item: ${item.TYPE}
  }

  type Mutation {
    addBoard(input: Add${board.TYPE}Input!): ${board.TYPE}Payload
    addList(input: Add${list.TYPE}Input!): ${list.TYPE}Payload
    addItem(input: Add${item.TYPE}Input!): ${item.TYPE}Payload
  }
`;

export const resolver = {
  [`add${board.TYPE}`]: board.addBoard,
  [`add${list.TYPE}`]: list.addList,
  [`add${item.TYPE}`]: item.addItem,
};

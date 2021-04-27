import { gql } from "apollo-server-koa";
import { getBoards } from "../db/query";

import * as mutations from "./mutations";

import * as item from "./item";
import * as board from "./board";
import * as list from "./list";
import { fromGlobalId } from "./id";

const node = gql`
  interface Node {
    # The id of the object.
    id: ID!
  }
`;

const query = gql`
  type Query {
    boards: [Board!]
    board(id: ID!): Board!
  }
`;

export const typeDefs = [
  node,
  item.schema,
  list.schema,
  board.schema,
  query,
  mutations.schema,
];

export const resolvers = {
  [item.TYPE]: item.resolver,
  [board.TYPE]: board.resolver,
  [list.TYPE]: list.resolver,

  Query: {
    boards: () => getBoards(),
    board: (ctx, args) => {
      const dbId = fromGlobalId(args.id).id;
      return getBoards().where({ id: dbId }).first();
    },
  },
  Mutation: mutations.resolver,
};

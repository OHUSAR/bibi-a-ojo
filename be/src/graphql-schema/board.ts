import { ApolloError, gql } from "apollo-server-koa";
import { saveBoardToDb } from "../db/mutation";

import { getBoards, getListsOfBoard } from "../db/query";
import { toGlobalId } from "./id";

export const TYPE = "Board";

export const schema = gql`
  type ${TYPE} implements Node {
    id: ID!
    name: String!
    lists: [List!]
  }
`;

export const resolver = {
  id: ({ id }) => toGlobalId(TYPE, id),
  lists: ({ id }) => getListsOfBoard(id),
};

export const addBoard = async (
  parent: unknown,
  { input }: { input: { name: string } },
  ctx: unknown
) => {
  return saveBoardToDb(input).then(async (boardId) => {
    if (boardId) {
      const board = await getBoards().where({ id: boardId }).first();
      return { board };
    } else {
      throw new ApolloError("Board not created.");
    }
  });
};

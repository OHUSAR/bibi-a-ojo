import { ApolloError, gql } from "apollo-server-koa";

import { saveListToDb } from "../db/mutation";
import { getBoards, getItemsOfList, getLists } from "../db/query";
import { fromGlobalId, toGlobalId } from "./id";

export const TYPE = "List";

export const schema = gql`
  type ${TYPE} implements Node {
    id: ID!
    name: String!
    items: [Item!]
    board: Board
  }
`;

export const resolver = {
  id: ({ id }) => toGlobalId(TYPE, id),
  items: ({ id }) => getItemsOfList(id),
  board: ({ boardId }) => getBoards().where({ id: boardId }).first(),
};

export const addList = async (
  parent: unknown,
  { input }: { input: { boardId: string; name: string } },
  ctx: unknown
) => {
  return saveListToDb({
    name: input.name,
    boardId: fromGlobalId(input.boardId).id,
  }).then(async (listId) => {
    if (listId) {
      const list = await getLists().where({ id: listId }).first();
      return { list };
    } else {
      throw new ApolloError("List not created.");
    }
  });
};

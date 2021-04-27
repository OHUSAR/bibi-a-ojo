import { ApolloError, gql } from "apollo-server-koa";

import { getItems, getLists } from "../db/query";
import { saveItemToDb } from "../db/mutation";
import { fromGlobalId, toGlobalId } from "./id";

export const TYPE = "Item";

export const schema = gql`
  type ${TYPE} implements Node {
    id: ID!
    name: String!
    list: List!
  }
`;

export const resolver = {
  id: ({ id }) => toGlobalId(TYPE, id),
  list: ({ listId }) => getLists().where({ id: listId }).first(),
};

export const addItem = async (
  parent: unknown,
  { input }: { input: { listId: string; name: string } },
  ctx: unknown
) => {
  return saveItemToDb({
    name: input.name,
    listId: fromGlobalId(input.listId).id,
  }).then(async (itemId) => {
    if (itemId) {
      const item = await getItems().where({ id: itemId }).first();
      return { item };
    } else {
      throw new ApolloError("Item not created.");
    }
  });
};

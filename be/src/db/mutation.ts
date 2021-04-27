import kx from "./db";
import { itemsDb, listsDb, boardsDb } from "./types/DbTypes";

export const saveBoardToDb = async (input: { name: string }) => {
  return kx<boardsDb>("boards")
    .insert({
      name: input.name,
    })
    .then((board) => {
      const boardId = board[0];
      return boardId;
    });
};

export const saveListToDb = async (input: {
  name: string;
  boardId: number;
}) => {
  return kx<listsDb>("lists")
    .insert({
      boardId: input.boardId,
      name: input.name,
    })
    .then((list) => {
      const listId = list[0];
      return listId;
    });
};

export const saveItemToDb = async (input: { name: string; listId: number }) => {
  return kx<itemsDb>("items")
    .insert({
      listId: input.listId,
      name: input.name,
    })
    .then((item) => {
      const itemId = item[0];
      return itemId;
    });
};

import kx from "./db";
import { itemsDb, listsDb, boardsDb } from "./types/DbTypes";

export const getBoards = () => {
  return kx<boardsDb>("boards");
};

export const getLists = () => {
  return kx<listsDb>("lists");
};

export const getItems = () => {
  return kx<itemsDb>("items");
};

export const getListsOfBoard = (boardId: number) => {
  return getLists().where("boardId", boardId);
};

export const getItemsOfList = (listId: number) => {
  return getItems().where("listId", listId);
};

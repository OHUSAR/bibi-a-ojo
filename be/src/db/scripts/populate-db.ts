import { boardsDb, itemsDb, listsDb } from "db/types/DbTypes";
import kx from "../db";
const data = require("./data.json");

Promise.all([
  kx<itemsDb>("items").del(),
  kx<listsDb>("lists").del(),
  kx<boardsDb>("boards").del(),
])
  .then(() => {
    const boards = data.boards.map(({ id, name }) => ({ id, name }));

    const lists = [];
    data.boards.forEach((board) => {
      board.lists.forEach((list) => {
        lists.push({
          id: list.id,
          name: list.name,
          board_id: board.id,
        });
      });
    });

    const items = [];
    data.boards.forEach((board) => {
      board.lists.forEach((list) => {
        list.items.forEach((item) => {
          items.push({
            id: item.id,
            name: item.name,
            list_id: list.id,
          });
        });
      });
    });

    return Promise.all([
      kx<boardsDb>("boards").insert(boards),
      kx<listsDb>("lists").insert(lists),
      kx<itemsDb>("items").insert(items),
    ]);
  })
  .then(() => {
    console.log("populated db");
  })
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

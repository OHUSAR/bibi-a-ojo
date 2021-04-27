"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _db = _interopRequireDefault(require("../db"));

const data = {
  boards: [{
    id: 0,
    name: "Prv\xFD Board",
    lists: [{
      id: 0,
      name: "TODO",
      items: [{
        id: 0,
        name: "Absolvova\u0165 pohovor"
      }, {
        id: 1,
        name: "Podp\xEDsa\u0165 zmluvu"
      }, {
        id: 2,
        name: "Nast\xFApi\u0165 do pr\xE1ce"
      }]
    }, {
      id: 1,
      name: "In Progress",
      items: [{
        id: 4,
        name: "Urobi\u0165 sk\xFA\u0161obn\xFD pr\xEDklad"
      }]
    }, {
      id: 2,
      name: "Done",
      items: []
    }]
  }, {
    id: 1,
    name: "Druh\xFD board",
    lists: []
  }]
};
Promise.all([(0, _db.default)("items").del(), (0, _db.default)("lists").del(), (0, _db.default)("boards").del()]).then(() => {
  const boards = data.boards.map(({
    id,
    name
  }) => ({
    id,
    name
  }));
  const lists = [];
  data.boards.forEach(board => {
    board.lists.forEach(list => {
      lists.push({
        id: list.id,
        name: list.name,
        board_id: board.id
      });
    });
  });
  const items = [];
  data.boards.forEach(board => {
    board.lists.forEach(list => {
      list.items.forEach(item => {
        items.push({
          id: item.id,
          name: item.name,
          list_id: list.id
        });
      });
    });
  });
  return Promise.all([(0, _db.default)("boards").insert(boards), (0, _db.default)("lists").insert(lists), (0, _db.default)("items").insert(items)]);
}).then(() => {
  console.log("populated db");
}).catch(console.error).finally(() => {
  process.exit();
});
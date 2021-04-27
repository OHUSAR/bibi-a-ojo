"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _db = _interopRequireDefault(require("../db"));

const createTableIfDoesNotExist = (tableName, fn) => {
  return _db.default.schema.hasTable(tableName).then(exists => {
    if (exists) {
      return Promise.resolve();
    }

    return _db.default.schema.createTable(tableName, fn);
  });
};

const createIdAndName = tableBuilder => {
  tableBuilder.increments("id").primary();
  tableBuilder.string("name", 100);
};

const boards = createTableIfDoesNotExist("boards", tableBuilder => {
  createIdAndName(tableBuilder);
});
const lists = createTableIfDoesNotExist("lists", tableBuilder => {
  createIdAndName(tableBuilder);
  tableBuilder.integer("board_id");
  tableBuilder.foreign("board_id").references("boards.id");
});
const items = createTableIfDoesNotExist("items", tableBuilder => {
  createIdAndName(tableBuilder);
  tableBuilder.integer("list_id");
  tableBuilder.foreign("list_id").references("lists.id");
});
Promise.all([boards, lists, items]).then(() => {
  console.log("schema created");
}).catch(console.error).finally(() => {
  process.exit();
});
import { Knex } from "knex";
import kx from "../db";

const createTableIfDoesNotExist = (
  tableName: string,
  fn: (tableBuilder: Knex.CreateTableBuilder) => void
) => {
  return kx.schema.hasTable(tableName).then((exists) => {
    if (exists) {
      return Promise.resolve();
    }
    return kx.schema.createTable(tableName, fn);
  });
};

const createIdAndName = (tableBuilder: Knex.TableBuilder) => {
  tableBuilder.increments("id").primary();
  tableBuilder.string("name", 100);
};

const boards = createTableIfDoesNotExist("boards", (tableBuilder) => {
  createIdAndName(tableBuilder);
});

const lists = createTableIfDoesNotExist("lists", (tableBuilder) => {
  createIdAndName(tableBuilder);
  tableBuilder.integer("board_id");
  tableBuilder.foreign("board_id").references("boards.id");
});

const items = createTableIfDoesNotExist("items", (tableBuilder) => {
  createIdAndName(tableBuilder);
  tableBuilder.integer("list_id");
  tableBuilder.foreign("list_id").references("lists.id");
});

Promise.all([boards, lists, items])
  .then(() => {
    console.log("schema created");
  })
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

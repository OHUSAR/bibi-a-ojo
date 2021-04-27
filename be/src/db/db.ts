import Knex from "knex";
import knexStringcase from "knex-stringcase";

import { db } from "../config";

const kxConfig = {
  client: "sqlite",
  connection: () => ({
    filename: db,
  }),
  useNullAsDefault: true,
};

const kx = Knex(knexStringcase(kxConfig));

export default kx;

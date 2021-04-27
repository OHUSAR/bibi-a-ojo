"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _knexStringcase = _interopRequireDefault(require("knex-stringcase"));

var _config = require("../config");

const kxConfig = {
  client: "sqlite",
  connection: () => ({
    filename: _config.db
  }),
  useNullAsDefault: true
};
const kx = (0, _knex.default)((0, _knexStringcase.default)(kxConfig));
var _default = kx;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolver = exports.schema = void 0;

var _apolloServerKoa = require("apollo-server-koa");

var marina = _interopRequireWildcard(require("./marina"));

const schema = (0, _apolloServerKoa.gql)`
  type Mutation {
    addMarina(input: AddMarinaInput!): MarinaPayload
  }
`;
exports.schema = schema;
const resolver = {
  addMarina: marina.addMarina
};
exports.resolver = resolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYS9tdXRhdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOlsic2NoZW1hIiwicmVzb2x2ZXIiLCJhZGRNYXJpbmEiLCJtYXJpbmEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVPLE1BQU1BLE1BQU0sR0FBRyx5QkFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxDQUpPOztBQU1BLE1BQU1DLFFBQVEsR0FBRztBQUN0QkMsRUFBQUEsU0FBUyxFQUFFQyxNQUFNLENBQUNEO0FBREksQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1rb2FcIjtcblxuaW1wb3J0ICogYXMgbWFyaW5hIGZyb20gXCIuL21hcmluYVwiO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBhZGRNYXJpbmEoaW5wdXQ6IEFkZE1hcmluYUlucHV0ISk6IE1hcmluYVBheWxvYWRcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyID0ge1xuICBhZGRNYXJpbmE6IG1hcmluYS5hZGRNYXJpbmEsXG59O1xuIl19
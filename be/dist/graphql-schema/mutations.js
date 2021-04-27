"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolver = exports.schema = void 0;

var _apolloServerKoa = require("apollo-server-koa");

var board = _interopRequireWildcard(require("./board"));

var list = _interopRequireWildcard(require("./list"));

var item = _interopRequireWildcard(require("./item"));

const schema = (0, _apolloServerKoa.gql)`
  input Add${board.TYPE}Input {
    name: String!
  }

  type ${board.TYPE}Payload {
    board: ${board.TYPE}
  }

  input Add${list.TYPE}Input {
    boardId: ID!
    name: String!
  }

  type ${list.TYPE}Payload {
    list: ${list.TYPE}
  }

  input Add${item.TYPE}Input {
    listId: ID!
    name: String!
  }

  type ${item.TYPE}Payload {
    item: ${item.TYPE}
  }

  type Mutation {
    addBoard(input: Add${board.TYPE}Input!): ${board.TYPE}Payload
    addList(input: Add${list.TYPE}Input!): ${list.TYPE}Payload
    addItem(input: Add${item.TYPE}Input!): ${item.TYPE}Payload
  }
`;
exports.schema = schema;
const resolver = {
  [`add${board.TYPE}`]: board.addBoard,
  [`add${list.TYPE}`]: list.addList,
  [`add${item.TYPE}`]: item.addItem
};
exports.resolver = resolver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYS9tdXRhdGlvbnMudHMiXSwibmFtZXMiOlsic2NoZW1hIiwiYm9hcmQiLCJUWVBFIiwibGlzdCIsIml0ZW0iLCJyZXNvbHZlciIsImFkZEJvYXJkIiwiYWRkTGlzdCIsImFkZEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVPLE1BQU1BLE1BQU0sR0FBRyx5QkFBSTtBQUMxQixhQUFhQyxLQUFLLENBQUNDLElBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsU0FBU0QsS0FBSyxDQUFDQyxJQUFLO0FBQ3BCLGFBQWFELEtBQUssQ0FBQ0MsSUFBSztBQUN4QjtBQUNBO0FBQ0EsYUFBYUMsSUFBSSxDQUFDRCxJQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsSUFBSSxDQUFDRCxJQUFLO0FBQ25CLFlBQVlDLElBQUksQ0FBQ0QsSUFBSztBQUN0QjtBQUNBO0FBQ0EsYUFBYUUsSUFBSSxDQUFDRixJQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0UsSUFBSSxDQUFDRixJQUFLO0FBQ25CLFlBQVlFLElBQUksQ0FBQ0YsSUFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUJELEtBQUssQ0FBQ0MsSUFBSyxZQUFXRCxLQUFLLENBQUNDLElBQUs7QUFDMUQsd0JBQXdCQyxJQUFJLENBQUNELElBQUssWUFBV0MsSUFBSSxDQUFDRCxJQUFLO0FBQ3ZELHdCQUF3QkUsSUFBSSxDQUFDRixJQUFLLFlBQVdFLElBQUksQ0FBQ0YsSUFBSztBQUN2RDtBQUNBLENBaENPOztBQWtDQSxNQUFNRyxRQUFRLEdBQUc7QUFDdEIsR0FBRSxNQUFLSixLQUFLLENBQUNDLElBQUssRUFBbEIsR0FBc0JELEtBQUssQ0FBQ0ssUUFETjtBQUV0QixHQUFFLE1BQUtILElBQUksQ0FBQ0QsSUFBSyxFQUFqQixHQUFxQkMsSUFBSSxDQUFDSSxPQUZKO0FBR3RCLEdBQUUsTUFBS0gsSUFBSSxDQUFDRixJQUFLLEVBQWpCLEdBQXFCRSxJQUFJLENBQUNJO0FBSEosQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1rb2FcIjtcblxuaW1wb3J0ICogYXMgYm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCAqIGFzIGxpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0ICogYXMgaXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIGlucHV0IEFkZCR7Ym9hcmQuVFlQRX1JbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSAke2JvYXJkLlRZUEV9UGF5bG9hZCB7XG4gICAgYm9hcmQ6ICR7Ym9hcmQuVFlQRX1cbiAgfVxuXG4gIGlucHV0IEFkZCR7bGlzdC5UWVBFfUlucHV0IHtcbiAgICBib2FyZElkOiBJRCFcbiAgICBuYW1lOiBTdHJpbmchXG4gIH1cblxuICB0eXBlICR7bGlzdC5UWVBFfVBheWxvYWQge1xuICAgIGxpc3Q6ICR7bGlzdC5UWVBFfVxuICB9XG5cbiAgaW5wdXQgQWRkJHtpdGVtLlRZUEV9SW5wdXQge1xuICAgIGxpc3RJZDogSUQhXG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSAke2l0ZW0uVFlQRX1QYXlsb2FkIHtcbiAgICBpdGVtOiAke2l0ZW0uVFlQRX1cbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGFkZEJvYXJkKGlucHV0OiBBZGQke2JvYXJkLlRZUEV9SW5wdXQhKTogJHtib2FyZC5UWVBFfVBheWxvYWRcbiAgICBhZGRMaXN0KGlucHV0OiBBZGQke2xpc3QuVFlQRX1JbnB1dCEpOiAke2xpc3QuVFlQRX1QYXlsb2FkXG4gICAgYWRkSXRlbShpbnB1dDogQWRkJHtpdGVtLlRZUEV9SW5wdXQhKTogJHtpdGVtLlRZUEV9UGF5bG9hZFxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXIgPSB7XG4gIFtgYWRkJHtib2FyZC5UWVBFfWBdOiBib2FyZC5hZGRCb2FyZCxcbiAgW2BhZGQke2xpc3QuVFlQRX1gXTogbGlzdC5hZGRMaXN0LFxuICBbYGFkZCR7aXRlbS5UWVBFfWBdOiBpdGVtLmFkZEl0ZW0sXG59O1xuIl19
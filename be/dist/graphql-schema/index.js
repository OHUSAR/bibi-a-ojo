"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _apolloServerKoa = require("apollo-server-koa");

var _query = require("../db/query");

var mutations = _interopRequireWildcard(require("./mutations"));

var item = _interopRequireWildcard(require("./item"));

var board = _interopRequireWildcard(require("./board"));

var list = _interopRequireWildcard(require("./list"));

var _id = require("./id");

const node = (0, _apolloServerKoa.gql)`
  interface Node {
    # The id of the object.
    id: ID!
  }
`;
const query = (0, _apolloServerKoa.gql)`
  type Query {
    boards: [Board!]
    board(id: ID!): Board!
  }
`;
const typeDefs = [node, item.schema, list.schema, board.schema, query, mutations.schema];
exports.typeDefs = typeDefs;
const resolvers = {
  [item.TYPE]: item.resolver,
  [board.TYPE]: board.resolver,
  [list.TYPE]: list.resolver,
  Query: {
    boards: () => (0, _query.getBoards)(),
    board: (ctx, args) => {
      const dbId = (0, _id.fromGlobalId)(args.id).id;
      return (0, _query.getBoards)().where({
        id: dbId
      }).first();
    }
  },
  Mutation: mutations.resolver
};
exports.resolvers = resolvers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYS9pbmRleC50cyJdLCJuYW1lcyI6WyJub2RlIiwicXVlcnkiLCJ0eXBlRGVmcyIsIml0ZW0iLCJzY2hlbWEiLCJsaXN0IiwiYm9hcmQiLCJtdXRhdGlvbnMiLCJyZXNvbHZlcnMiLCJUWVBFIiwicmVzb2x2ZXIiLCJRdWVyeSIsImJvYXJkcyIsImN0eCIsImFyZ3MiLCJkYklkIiwiaWQiLCJ3aGVyZSIsImZpcnN0IiwiTXV0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyx5QkFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7QUFPQSxNQUFNQyxLQUFLLEdBQUcseUJBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBT08sTUFBTUMsUUFBUSxHQUFHLENBQ3RCRixJQURzQixFQUV0QkcsSUFBSSxDQUFDQyxNQUZpQixFQUd0QkMsSUFBSSxDQUFDRCxNQUhpQixFQUl0QkUsS0FBSyxDQUFDRixNQUpnQixFQUt0QkgsS0FMc0IsRUFNdEJNLFNBQVMsQ0FBQ0gsTUFOWSxDQUFqQjs7QUFTQSxNQUFNSSxTQUFTLEdBQUc7QUFDdkIsR0FBQ0wsSUFBSSxDQUFDTSxJQUFOLEdBQWFOLElBQUksQ0FBQ08sUUFESztBQUV2QixHQUFDSixLQUFLLENBQUNHLElBQVAsR0FBY0gsS0FBSyxDQUFDSSxRQUZHO0FBR3ZCLEdBQUNMLElBQUksQ0FBQ0ksSUFBTixHQUFhSixJQUFJLENBQUNLLFFBSEs7QUFLdkJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxNQUFNLEVBQUUsTUFBTSx1QkFEVDtBQUVMTixJQUFBQSxLQUFLLEVBQUUsQ0FBQ08sR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDcEIsWUFBTUMsSUFBSSxHQUFHLHNCQUFhRCxJQUFJLENBQUNFLEVBQWxCLEVBQXNCQSxFQUFuQztBQUNBLGFBQU8sd0JBQVlDLEtBQVosQ0FBa0I7QUFBRUQsUUFBQUEsRUFBRSxFQUFFRDtBQUFOLE9BQWxCLEVBQWdDRyxLQUFoQyxFQUFQO0FBQ0Q7QUFMSSxHQUxnQjtBQVl2QkMsRUFBQUEsUUFBUSxFQUFFWixTQUFTLENBQUNHO0FBWkcsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1rb2FcIjtcbmltcG9ydCB7IGdldEJvYXJkcyB9IGZyb20gXCIuLi9kYi9xdWVyeVwiO1xuXG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmltcG9ydCAqIGFzIGl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0ICogYXMgYm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCAqIGFzIGxpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgZnJvbUdsb2JhbElkIH0gZnJvbSBcIi4vaWRcIjtcblxuY29uc3Qgbm9kZSA9IGdxbGBcbiAgaW50ZXJmYWNlIE5vZGUge1xuICAgICMgVGhlIGlkIG9mIHRoZSBvYmplY3QuXG4gICAgaWQ6IElEIVxuICB9XG5gO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgdHlwZSBRdWVyeSB7XG4gICAgYm9hcmRzOiBbQm9hcmQhXVxuICAgIGJvYXJkKGlkOiBJRCEpOiBCb2FyZCFcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gW1xuICBub2RlLFxuICBpdGVtLnNjaGVtYSxcbiAgbGlzdC5zY2hlbWEsXG4gIGJvYXJkLnNjaGVtYSxcbiAgcXVlcnksXG4gIG11dGF0aW9ucy5zY2hlbWEsXG5dO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xuICBbaXRlbS5UWVBFXTogaXRlbS5yZXNvbHZlcixcbiAgW2JvYXJkLlRZUEVdOiBib2FyZC5yZXNvbHZlcixcbiAgW2xpc3QuVFlQRV06IGxpc3QucmVzb2x2ZXIsXG5cbiAgUXVlcnk6IHtcbiAgICBib2FyZHM6ICgpID0+IGdldEJvYXJkcygpLFxuICAgIGJvYXJkOiAoY3R4LCBhcmdzKSA9PiB7XG4gICAgICBjb25zdCBkYklkID0gZnJvbUdsb2JhbElkKGFyZ3MuaWQpLmlkO1xuICAgICAgcmV0dXJuIGdldEJvYXJkcygpLndoZXJlKHsgaWQ6IGRiSWQgfSkuZmlyc3QoKTtcbiAgICB9LFxuICB9LFxuICBNdXRhdGlvbjogbXV0YXRpb25zLnJlc29sdmVyLFxufTtcbiJdfQ==
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addList = exports.resolver = exports.schema = exports.TYPE = void 0;

var _apolloServerKoa = require("apollo-server-koa");

var _mutation = require("../db/mutation");

var _query = require("../db/query");

var _id = require("./id");

const TYPE = "List";
exports.TYPE = TYPE;
const schema = (0, _apolloServerKoa.gql)`
  type ${TYPE} implements Node {
    id: ID!
    name: String!
    items: [Item!]
    board: Board
  }
`;
exports.schema = schema;
const resolver = {
  id: ({
    id
  }) => (0, _id.toGlobalId)(TYPE, id),
  items: ({
    id
  }) => (0, _query.getItemsOfList)(id),
  board: ({
    boardId
  }) => (0, _query.getBoards)().where({
    id: boardId
  }).first()
};
exports.resolver = resolver;

const addList = async (parent, {
  input
}, ctx) => {
  return (0, _mutation.saveListToDb)({
    name: input.name,
    boardId: (0, _id.fromGlobalId)(input.boardId).id
  }).then(async listId => {
    if (listId) {
      const list = await (0, _query.getLists)().where({
        id: listId
      }).first();
      return {
        list
      };
    } else {
      throw new _apolloServerKoa.ApolloError("List not created.");
    }
  });
};

exports.addList = addList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYS9saXN0LnRzIl0sIm5hbWVzIjpbIlRZUEUiLCJzY2hlbWEiLCJyZXNvbHZlciIsImlkIiwiaXRlbXMiLCJib2FyZCIsImJvYXJkSWQiLCJ3aGVyZSIsImZpcnN0IiwiYWRkTGlzdCIsInBhcmVudCIsImlucHV0IiwiY3R4IiwibmFtZSIsInRoZW4iLCJsaXN0SWQiLCJsaXN0IiwiQXBvbGxvRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFTyxNQUFNQSxJQUFJLEdBQUcsTUFBYjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcseUJBQUk7QUFDMUIsU0FBU0QsSUFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBPOztBQVNBLE1BQU1FLFFBQVEsR0FBRztBQUN0QkMsRUFBQUEsRUFBRSxFQUFFLENBQUM7QUFBRUEsSUFBQUE7QUFBRixHQUFELEtBQVksb0JBQVdILElBQVgsRUFBaUJHLEVBQWpCLENBRE07QUFFdEJDLEVBQUFBLEtBQUssRUFBRSxDQUFDO0FBQUVELElBQUFBO0FBQUYsR0FBRCxLQUFZLDJCQUFlQSxFQUFmLENBRkc7QUFHdEJFLEVBQUFBLEtBQUssRUFBRSxDQUFDO0FBQUVDLElBQUFBO0FBQUYsR0FBRCxLQUFpQix3QkFBWUMsS0FBWixDQUFrQjtBQUFFSixJQUFBQSxFQUFFLEVBQUVHO0FBQU4sR0FBbEIsRUFBbUNFLEtBQW5DO0FBSEYsQ0FBakI7OztBQU1BLE1BQU1DLE9BQU8sR0FBRyxPQUNyQkMsTUFEcUIsRUFFckI7QUFBRUMsRUFBQUE7QUFBRixDQUZxQixFQUdyQkMsR0FIcUIsS0FJbEI7QUFDSCxTQUFPLDRCQUFhO0FBQ2xCQyxJQUFBQSxJQUFJLEVBQUVGLEtBQUssQ0FBQ0UsSUFETTtBQUVsQlAsSUFBQUEsT0FBTyxFQUFFLHNCQUFhSyxLQUFLLENBQUNMLE9BQW5CLEVBQTRCSDtBQUZuQixHQUFiLEVBR0pXLElBSEksQ0FHQyxNQUFPQyxNQUFQLElBQWtCO0FBQ3hCLFFBQUlBLE1BQUosRUFBWTtBQUNWLFlBQU1DLElBQUksR0FBRyxNQUFNLHVCQUFXVCxLQUFYLENBQWlCO0FBQUVKLFFBQUFBLEVBQUUsRUFBRVk7QUFBTixPQUFqQixFQUFpQ1AsS0FBakMsRUFBbkI7QUFDQSxhQUFPO0FBQUVRLFFBQUFBO0FBQUYsT0FBUDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU0sSUFBSUMsNEJBQUosQ0FBZ0IsbUJBQWhCLENBQU47QUFDRDtBQUNGLEdBVk0sQ0FBUDtBQVdELENBaEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvRXJyb3IsIGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWtvYVwiO1xuXG5pbXBvcnQgeyBzYXZlTGlzdFRvRGIgfSBmcm9tIFwiLi4vZGIvbXV0YXRpb25cIjtcbmltcG9ydCB7IGdldEJvYXJkcywgZ2V0SXRlbXNPZkxpc3QsIGdldExpc3RzIH0gZnJvbSBcIi4uL2RiL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmcm9tR2xvYmFsSWQsIHRvR2xvYmFsSWQgfSBmcm9tIFwiLi9pZFwiO1xuXG5leHBvcnQgY29uc3QgVFlQRSA9IFwiTGlzdFwiO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlICR7VFlQRX0gaW1wbGVtZW50cyBOb2RlIHtcbiAgICBpZDogSUQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGl0ZW1zOiBbSXRlbSFdXG4gICAgYm9hcmQ6IEJvYXJkXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlciA9IHtcbiAgaWQ6ICh7IGlkIH0pID0+IHRvR2xvYmFsSWQoVFlQRSwgaWQpLFxuICBpdGVtczogKHsgaWQgfSkgPT4gZ2V0SXRlbXNPZkxpc3QoaWQpLFxuICBib2FyZDogKHsgYm9hcmRJZCB9KSA9PiBnZXRCb2FyZHMoKS53aGVyZSh7IGlkOiBib2FyZElkIH0pLmZpcnN0KCksXG59O1xuXG5leHBvcnQgY29uc3QgYWRkTGlzdCA9IGFzeW5jIChcbiAgcGFyZW50OiB1bmtub3duLFxuICB7IGlucHV0IH06IHsgaW5wdXQ6IHsgYm9hcmRJZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfSB9LFxuICBjdHg6IHVua25vd25cbikgPT4ge1xuICByZXR1cm4gc2F2ZUxpc3RUb0RiKHtcbiAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgIGJvYXJkSWQ6IGZyb21HbG9iYWxJZChpbnB1dC5ib2FyZElkKS5pZCxcbiAgfSkudGhlbihhc3luYyAobGlzdElkKSA9PiB7XG4gICAgaWYgKGxpc3RJZCkge1xuICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldExpc3RzKCkud2hlcmUoeyBpZDogbGlzdElkIH0pLmZpcnN0KCk7XG4gICAgICByZXR1cm4geyBsaXN0IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcihcIkxpc3Qgbm90IGNyZWF0ZWQuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuIl19
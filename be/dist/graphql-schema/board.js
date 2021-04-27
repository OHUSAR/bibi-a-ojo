"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBoard = exports.resolver = exports.schema = exports.TYPE = void 0;

var _apolloServerKoa = require("apollo-server-koa");

var _mutation = require("../db/mutation");

var _query = require("../db/query");

var _id = require("./id");

const TYPE = "Board";
exports.TYPE = TYPE;
const schema = (0, _apolloServerKoa.gql)`
  type ${TYPE} implements Node {
    id: ID!
    name: String!
    lists: [List!]
  }
`;
exports.schema = schema;
const resolver = {
  id: ({
    id
  }) => (0, _id.toGlobalId)(TYPE, id),
  lists: ({
    id
  }) => (0, _query.getListsOfBoard)(id)
};
exports.resolver = resolver;

const addBoard = async (parent, {
  input
}, ctx) => {
  return (0, _mutation.saveBoardToDb)(input).then(async boardId => {
    if (boardId) {
      const board = await (0, _query.getBoards)().where({
        id: boardId
      }).first();
      return {
        board
      };
    } else {
      throw new _apolloServerKoa.ApolloError("Board not created.");
    }
  });
};

exports.addBoard = addBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYS9ib2FyZC50cyJdLCJuYW1lcyI6WyJUWVBFIiwic2NoZW1hIiwicmVzb2x2ZXIiLCJpZCIsImxpc3RzIiwiYWRkQm9hcmQiLCJwYXJlbnQiLCJpbnB1dCIsImN0eCIsInRoZW4iLCJib2FyZElkIiwiYm9hcmQiLCJ3aGVyZSIsImZpcnN0IiwiQXBvbGxvRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFTyxNQUFNQSxJQUFJLEdBQUcsT0FBYjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcseUJBQUk7QUFDMUIsU0FBU0QsSUFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTzs7QUFRQSxNQUFNRSxRQUFRLEdBQUc7QUFDdEJDLEVBQUFBLEVBQUUsRUFBRSxDQUFDO0FBQUVBLElBQUFBO0FBQUYsR0FBRCxLQUFZLG9CQUFXSCxJQUFYLEVBQWlCRyxFQUFqQixDQURNO0FBRXRCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFRCxJQUFBQTtBQUFGLEdBQUQsS0FBWSw0QkFBZ0JBLEVBQWhCO0FBRkcsQ0FBakI7OztBQUtBLE1BQU1FLFFBQVEsR0FBRyxPQUN0QkMsTUFEc0IsRUFFdEI7QUFBRUMsRUFBQUE7QUFBRixDQUZzQixFQUd0QkMsR0FIc0IsS0FJbkI7QUFDSCxTQUFPLDZCQUFjRCxLQUFkLEVBQXFCRSxJQUFyQixDQUEwQixNQUFPQyxPQUFQLElBQW1CO0FBQ2xELFFBQUlBLE9BQUosRUFBYTtBQUNYLFlBQU1DLEtBQUssR0FBRyxNQUFNLHdCQUFZQyxLQUFaLENBQWtCO0FBQUVULFFBQUFBLEVBQUUsRUFBRU87QUFBTixPQUFsQixFQUFtQ0csS0FBbkMsRUFBcEI7QUFDQSxhQUFPO0FBQUVGLFFBQUFBO0FBQUYsT0FBUDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU0sSUFBSUcsNEJBQUosQ0FBZ0Isb0JBQWhCLENBQU47QUFDRDtBQUNGLEdBUE0sQ0FBUDtBQVFELENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9FcnJvciwgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXIta29hXCI7XG5pbXBvcnQgeyBzYXZlQm9hcmRUb0RiIH0gZnJvbSBcIi4uL2RiL211dGF0aW9uXCI7XG5cbmltcG9ydCB7IGdldEJvYXJkcywgZ2V0TGlzdHNPZkJvYXJkIH0gZnJvbSBcIi4uL2RiL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0b0dsb2JhbElkIH0gZnJvbSBcIi4vaWRcIjtcblxuZXhwb3J0IGNvbnN0IFRZUEUgPSBcIkJvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgJHtUWVBFfSBpbXBsZW1lbnRzIE5vZGUge1xuICAgIGlkOiBJRCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgbGlzdHM6IFtMaXN0IV1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyID0ge1xuICBpZDogKHsgaWQgfSkgPT4gdG9HbG9iYWxJZChUWVBFLCBpZCksXG4gIGxpc3RzOiAoeyBpZCB9KSA9PiBnZXRMaXN0c09mQm9hcmQoaWQpLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZEJvYXJkID0gYXN5bmMgKFxuICBwYXJlbnQ6IHVua25vd24sXG4gIHsgaW5wdXQgfTogeyBpbnB1dDogeyBuYW1lOiBzdHJpbmcgfSB9LFxuICBjdHg6IHVua25vd25cbikgPT4ge1xuICByZXR1cm4gc2F2ZUJvYXJkVG9EYihpbnB1dCkudGhlbihhc3luYyAoYm9hcmRJZCkgPT4ge1xuICAgIGlmIChib2FyZElkKSB7XG4gICAgICBjb25zdCBib2FyZCA9IGF3YWl0IGdldEJvYXJkcygpLndoZXJlKHsgaWQ6IGJvYXJkSWQgfSkuZmlyc3QoKTtcbiAgICAgIHJldHVybiB7IGJvYXJkIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcihcIkJvYXJkIG5vdCBjcmVhdGVkLlwiKTtcbiAgICB9XG4gIH0pO1xufTtcbiJdfQ==
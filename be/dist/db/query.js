"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemsOfList = exports.getListsOfBoard = exports.getItems = exports.getLists = exports.getBoards = void 0;

var _db = _interopRequireDefault(require("./db"));

const getBoards = () => {
  return (0, _db.default)("boards");
};

exports.getBoards = getBoards;

const getLists = () => {
  return (0, _db.default)("lists");
};

exports.getLists = getLists;

const getItems = () => {
  return (0, _db.default)("items");
};

exports.getItems = getItems;

const getListsOfBoard = boardId => {
  return getLists().where("boardId", boardId);
};

exports.getListsOfBoard = getListsOfBoard;

const getItemsOfList = listId => {
  return getItems().where("listId", listId);
};

exports.getItemsOfList = getItemsOfList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi9xdWVyeS50cyJdLCJuYW1lcyI6WyJnZXRCb2FyZHMiLCJnZXRMaXN0cyIsImdldEl0ZW1zIiwiZ2V0TGlzdHNPZkJvYXJkIiwiYm9hcmRJZCIsIndoZXJlIiwiZ2V0SXRlbXNPZkxpc3QiLCJsaXN0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdPLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQzdCLFNBQU8saUJBQWEsUUFBYixDQUFQO0FBQ0QsQ0FGTTs7OztBQUlBLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQzVCLFNBQU8saUJBQVksT0FBWixDQUFQO0FBQ0QsQ0FGTTs7OztBQUlBLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQzVCLFNBQU8saUJBQVksT0FBWixDQUFQO0FBQ0QsQ0FGTTs7OztBQUlBLE1BQU1DLGVBQWUsR0FBSUMsT0FBRCxJQUFxQjtBQUNsRCxTQUFPSCxRQUFRLEdBQUdJLEtBQVgsQ0FBaUIsU0FBakIsRUFBNEJELE9BQTVCLENBQVA7QUFDRCxDQUZNOzs7O0FBSUEsTUFBTUUsY0FBYyxHQUFJQyxNQUFELElBQW9CO0FBQ2hELFNBQU9MLFFBQVEsR0FBR0csS0FBWCxDQUFpQixRQUFqQixFQUEyQkUsTUFBM0IsQ0FBUDtBQUNELENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga3ggZnJvbSBcIi4vZGJcIjtcbmltcG9ydCB7IGl0ZW1zRGIsIGxpc3RzRGIsIGJvYXJkc0RiIH0gZnJvbSBcIi4vdHlwZXMvRGJUeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Qm9hcmRzID0gKCkgPT4ge1xuICByZXR1cm4ga3g8Ym9hcmRzRGI+KFwiYm9hcmRzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExpc3RzID0gKCkgPT4ge1xuICByZXR1cm4ga3g8bGlzdHNEYj4oXCJsaXN0c1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgcmV0dXJuIGt4PGl0ZW1zRGI+KFwiaXRlbXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGlzdHNPZkJvYXJkID0gKGJvYXJkSWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4gZ2V0TGlzdHMoKS53aGVyZShcImJvYXJkSWRcIiwgYm9hcmRJZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SXRlbXNPZkxpc3QgPSAobGlzdElkOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIGdldEl0ZW1zKCkud2hlcmUoXCJsaXN0SWRcIiwgbGlzdElkKTtcbn07XG4iXX0=
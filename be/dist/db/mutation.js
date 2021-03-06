"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveItemToDb = exports.saveListToDb = exports.saveBoardToDb = void 0;

var _db = _interopRequireDefault(require("./db"));

const saveBoardToDb = async input => {
  return (0, _db.default)("boards").insert({
    name: input.name
  }).then(board => {
    const boardId = board[0];
    return boardId;
  });
};

exports.saveBoardToDb = saveBoardToDb;

const saveListToDb = async (input) => {
  return (0, _db.default)("lists").insert({
    boardId: input.boardId,
    name: input.name
  }).then(list => {
    const listId = list[0];
    return listId;
  });
};

exports.saveListToDb = saveListToDb;

const saveItemToDb = async input => {
  return (0, _db.default)("items").insert({
    listId: input.listId,
    name: input.name
  }).then(item => {
    const itemId = item[0];
    return itemId;
  });
};

exports.saveItemToDb = saveItemToDb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi9tdXRhdGlvbi50cyJdLCJuYW1lcyI6WyJzYXZlQm9hcmRUb0RiIiwiaW5wdXQiLCJpbnNlcnQiLCJuYW1lIiwidGhlbiIsImJvYXJkIiwiYm9hcmRJZCIsInNhdmVMaXN0VG9EYiIsImxpc3QiLCJsaXN0SWQiLCJzYXZlSXRlbVRvRGIiLCJpdGVtIiwiaXRlbUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHTyxNQUFNQSxhQUFhLEdBQUcsTUFBT0MsS0FBUCxJQUFtQztBQUM5RCxTQUFPLGlCQUFhLFFBQWIsRUFDSkMsTUFESSxDQUNHO0FBQ05DLElBQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDRTtBQUROLEdBREgsRUFJSkMsSUFKSSxDQUlFQyxLQUFELElBQVc7QUFDZixVQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQXJCO0FBQ0EsV0FBT0MsT0FBUDtBQUNELEdBUEksQ0FBUDtBQVFELENBVE07Ozs7QUFXQSxNQUFNQyxZQUFZLEdBQUcsT0FBT04sS0FBUCxLQUd0QjtBQUNKLFNBQU8saUJBQVksT0FBWixFQUNKQyxNQURJLENBQ0c7QUFDTkksSUFBQUEsT0FBTyxFQUFFTCxLQUFLLENBQUNLLE9BRFQ7QUFFTkgsSUFBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNFO0FBRk4sR0FESCxFQUtKQyxJQUxJLENBS0VJLElBQUQsSUFBVTtBQUNkLFVBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDLENBQUQsQ0FBbkI7QUFDQSxXQUFPQyxNQUFQO0FBQ0QsR0FSSSxDQUFQO0FBU0QsQ0FiTTs7OztBQWVBLE1BQU1DLFlBQVksR0FBRyxNQUFPVCxLQUFQLElBQW1EO0FBQzdFLFNBQU8saUJBQVksT0FBWixFQUNKQyxNQURJLENBQ0c7QUFDTk8sSUFBQUEsTUFBTSxFQUFFUixLQUFLLENBQUNRLE1BRFI7QUFFTk4sSUFBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNFO0FBRk4sR0FESCxFQUtKQyxJQUxJLENBS0VPLElBQUQsSUFBVTtBQUNkLFVBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDLENBQUQsQ0FBbkI7QUFDQSxXQUFPQyxNQUFQO0FBQ0QsR0FSSSxDQUFQO0FBU0QsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBreCBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgaXRlbXNEYiwgbGlzdHNEYiwgYm9hcmRzRGIgfSBmcm9tIFwiLi90eXBlcy9EYlR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzYXZlQm9hcmRUb0RiID0gYXN5bmMgKGlucHV0OiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7XG4gIHJldHVybiBreDxib2FyZHNEYj4oXCJib2FyZHNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgfSlcbiAgICAudGhlbigoYm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkSWQgPSBib2FyZFswXTtcbiAgICAgIHJldHVybiBib2FyZElkO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVMaXN0VG9EYiA9IGFzeW5jIChpbnB1dDoge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJvYXJkSWQ6IG51bWJlcjtcbn0pID0+IHtcbiAgcmV0dXJuIGt4PGxpc3RzRGI+KFwibGlzdHNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGJvYXJkSWQ6IGlucHV0LmJvYXJkSWQsXG4gICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgIH0pXG4gICAgLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RJZCA9IGxpc3RbMF07XG4gICAgICByZXR1cm4gbGlzdElkO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVJdGVtVG9EYiA9IGFzeW5jIChpbnB1dDogeyBuYW1lOiBzdHJpbmc7IGxpc3RJZDogbnVtYmVyIH0pID0+IHtcbiAgcmV0dXJuIGt4PGl0ZW1zRGI+KFwiaXRlbXNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIGxpc3RJZDogaW5wdXQubGlzdElkLFxuICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICB9KVxuICAgIC50aGVuKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSWQgPSBpdGVtWzBdO1xuICAgICAgcmV0dXJuIGl0ZW1JZDtcbiAgICB9KTtcbn07XG4iXX0=
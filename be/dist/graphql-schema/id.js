"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromGlobalId = exports.toGlobalId = void 0;

const toGlobalId = (type, id) => {
  return `${type}:${id}`;
};

exports.toGlobalId = toGlobalId;

const fromGlobalId = id => {
  return {
    id: parseInt(id.split(":")[1]),
    type: id.split(":")[0]
  };
};

exports.fromGlobalId = fromGlobalId;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYS9pZC50cyJdLCJuYW1lcyI6WyJ0b0dsb2JhbElkIiwidHlwZSIsImlkIiwiZnJvbUdsb2JhbElkIiwicGFyc2VJbnQiLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFVBQVUsR0FBRyxDQUFDQyxJQUFELEVBQWVDLEVBQWYsS0FBOEI7QUFDdEQsU0FBUSxHQUFFRCxJQUFLLElBQUdDLEVBQUcsRUFBckI7QUFDRCxDQUZNOzs7O0FBSUEsTUFBTUMsWUFBWSxHQUFJRCxFQUFELElBQWdCO0FBQzFDLFNBQU87QUFBRUEsSUFBQUEsRUFBRSxFQUFFRSxRQUFRLENBQUNGLEVBQUUsQ0FBQ0csS0FBSCxDQUFTLEdBQVQsRUFBYyxDQUFkLENBQUQsQ0FBZDtBQUFrQ0osSUFBQUEsSUFBSSxFQUFFQyxFQUFFLENBQUNHLEtBQUgsQ0FBUyxHQUFULEVBQWMsQ0FBZDtBQUF4QyxHQUFQO0FBQ0QsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b0dsb2JhbElkID0gKHR5cGU6IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4gYCR7dHlwZX06JHtpZH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyb21HbG9iYWxJZCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB7IGlkOiBwYXJzZUludChpZC5zcGxpdChcIjpcIilbMV0pLCB0eXBlOiBpZC5zcGxpdChcIjpcIilbMF0gfTtcbn07XG4iXX0=
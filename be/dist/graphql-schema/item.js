"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItem = exports.resolver = exports.schema = exports.TYPE = void 0;

var _apolloServerKoa = require("apollo-server-koa");

var _query = require("../db/query");

var _mutation = require("../db/mutation");

var _id = require("./id");

const TYPE = "Item";
exports.TYPE = TYPE;
const schema = (0, _apolloServerKoa.gql)`
  type ${TYPE} implements Node {
    id: ID!
    name: String!
    list: List!
  }
`;
exports.schema = schema;
const resolver = {
  id: ({
    id
  }) => (0, _id.toGlobalId)(TYPE, id),
  list: ({
    listId
  }) => (0, _query.getLists)().where({
    id: listId
  }).first()
};
exports.resolver = resolver;

const addItem = async (parent, {
  input
}, ctx) => {
  return (0, _mutation.saveItemToDb)({
    name: input.name,
    listId: (0, _id.fromGlobalId)(input.listId).id
  }).then(async itemId => {
    if (itemId) {
      const item = await (0, _query.getItems)().where({
        id: itemId
      }).first();
      return {
        item
      };
    } else {
      throw new _apolloServerKoa.ApolloError("Item not created.");
    }
  });
};

exports.addItem = addItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYS9pdGVtLnRzIl0sIm5hbWVzIjpbIlRZUEUiLCJzY2hlbWEiLCJyZXNvbHZlciIsImlkIiwibGlzdCIsImxpc3RJZCIsIndoZXJlIiwiZmlyc3QiLCJhZGRJdGVtIiwicGFyZW50IiwiaW5wdXQiLCJjdHgiLCJuYW1lIiwidGhlbiIsIml0ZW1JZCIsIml0ZW0iLCJBcG9sbG9FcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVPLE1BQU1BLElBQUksR0FBRyxNQUFiOztBQUVBLE1BQU1DLE1BQU0sR0FBRyx5QkFBSTtBQUMxQixTQUFTRCxJQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5POztBQVFBLE1BQU1FLFFBQVEsR0FBRztBQUN0QkMsRUFBQUEsRUFBRSxFQUFFLENBQUM7QUFBRUEsSUFBQUE7QUFBRixHQUFELEtBQVksb0JBQVdILElBQVgsRUFBaUJHLEVBQWpCLENBRE07QUFFdEJDLEVBQUFBLElBQUksRUFBRSxDQUFDO0FBQUVDLElBQUFBO0FBQUYsR0FBRCxLQUFnQix1QkFBV0MsS0FBWCxDQUFpQjtBQUFFSCxJQUFBQSxFQUFFLEVBQUVFO0FBQU4sR0FBakIsRUFBaUNFLEtBQWpDO0FBRkEsQ0FBakI7OztBQUtBLE1BQU1DLE9BQU8sR0FBRyxPQUNyQkMsTUFEcUIsRUFFckI7QUFBRUMsRUFBQUE7QUFBRixDQUZxQixFQUdyQkMsR0FIcUIsS0FJbEI7QUFDSCxTQUFPLDRCQUFhO0FBQ2xCQyxJQUFBQSxJQUFJLEVBQUVGLEtBQUssQ0FBQ0UsSUFETTtBQUVsQlAsSUFBQUEsTUFBTSxFQUFFLHNCQUFhSyxLQUFLLENBQUNMLE1BQW5CLEVBQTJCRjtBQUZqQixHQUFiLEVBR0pVLElBSEksQ0FHQyxNQUFPQyxNQUFQLElBQWtCO0FBQ3hCLFFBQUlBLE1BQUosRUFBWTtBQUNWLFlBQU1DLElBQUksR0FBRyxNQUFNLHVCQUFXVCxLQUFYLENBQWlCO0FBQUVILFFBQUFBLEVBQUUsRUFBRVc7QUFBTixPQUFqQixFQUFpQ1AsS0FBakMsRUFBbkI7QUFDQSxhQUFPO0FBQUVRLFFBQUFBO0FBQUYsT0FBUDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU0sSUFBSUMsNEJBQUosQ0FBZ0IsbUJBQWhCLENBQU47QUFDRDtBQUNGLEdBVk0sQ0FBUDtBQVdELENBaEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvRXJyb3IsIGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWtvYVwiO1xuXG5pbXBvcnQgeyBnZXRJdGVtcywgZ2V0TGlzdHMgfSBmcm9tIFwiLi4vZGIvcXVlcnlcIjtcbmltcG9ydCB7IHNhdmVJdGVtVG9EYiB9IGZyb20gXCIuLi9kYi9tdXRhdGlvblwiO1xuaW1wb3J0IHsgZnJvbUdsb2JhbElkLCB0b0dsb2JhbElkIH0gZnJvbSBcIi4vaWRcIjtcblxuZXhwb3J0IGNvbnN0IFRZUEUgPSBcIkl0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IHNjaGVtYSA9IGdxbGBcbiAgdHlwZSAke1RZUEV9IGltcGxlbWVudHMgTm9kZSB7XG4gICAgaWQ6IElEIVxuICAgIG5hbWU6IFN0cmluZyFcbiAgICBsaXN0OiBMaXN0IVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXIgPSB7XG4gIGlkOiAoeyBpZCB9KSA9PiB0b0dsb2JhbElkKFRZUEUsIGlkKSxcbiAgbGlzdDogKHsgbGlzdElkIH0pID0+IGdldExpc3RzKCkud2hlcmUoeyBpZDogbGlzdElkIH0pLmZpcnN0KCksXG59O1xuXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9IGFzeW5jIChcbiAgcGFyZW50OiB1bmtub3duLFxuICB7IGlucHV0IH06IHsgaW5wdXQ6IHsgbGlzdElkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9IH0sXG4gIGN0eDogdW5rbm93blxuKSA9PiB7XG4gIHJldHVybiBzYXZlSXRlbVRvRGIoe1xuICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgbGlzdElkOiBmcm9tR2xvYmFsSWQoaW5wdXQubGlzdElkKS5pZCxcbiAgfSkudGhlbihhc3luYyAoaXRlbUlkKSA9PiB7XG4gICAgaWYgKGl0ZW1JZCkge1xuICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IGdldEl0ZW1zKCkud2hlcmUoeyBpZDogaXRlbUlkIH0pLmZpcnN0KCk7XG4gICAgICByZXR1cm4geyBpdGVtIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcihcIkl0ZW0gbm90IGNyZWF0ZWQuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuIl19
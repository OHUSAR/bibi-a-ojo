"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koa = _interopRequireDefault(require("koa"));

var _apolloServerKoa = require("apollo-server-koa");

var _graphqlSchema = require("./graphql-schema");

var _config = require("./config");

const server = new _apolloServerKoa.ApolloServer({
  uploads: false,
  typeDefs: _graphqlSchema.typeDefs,
  resolvers: _graphqlSchema.resolvers,
  schemaDirectives: {},
  playground: {
    settings: {
      "schema.polling.enable": true
    }
  },
  introspection: true,
  debug: true,
  context: async ({
    ctx
  }) => {
    return {};
  }
});
const app = new _koa.default();
app.proxy = true;
server.applyMiddleware({
  app
});
app.on("error", (err, ctx) => {
  console.error(err);
});
app.listen({
  port: _config.port
}, () => {
  console.log("Running at", `http://localhost:${_config.port}/graphql`);
});
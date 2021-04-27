import Koa, { Context as KoaContext } from "koa";
import { ApolloServer } from "apollo-server-koa";

import { typeDefs, resolvers } from "./graphql-schema";
import { port } from "./config";

const server = new ApolloServer({
  uploads: false,
  typeDefs,
  resolvers,
  schemaDirectives: {},
  playground: {
    settings: {
      "schema.polling.enable": true,
    },
  },
  introspection: true,
  debug: true,
  context: async ({ ctx }: { ctx: KoaContext }): Promise<any> => {
    return {};
  },
});

const app = new Koa();
app.proxy = true;

server.applyMiddleware({ app });

app.on("error", (err, ctx) => {
  console.error(err);
});

app.listen({ port }, () => {
  console.log("Running at", `http://localhost:${port}/graphql`);
});

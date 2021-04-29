import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {
//   ApolloProvider,
//   HttpLink,
//   ApolloClient,
//   InMemoryCache,
// } from "@apollo/client";

import Home from "./pages/home";

import styles from "./App.module.scss";

// const link = new HttpLink({
//   uri: "http://localhost:8081/graphql",
// });
// const cache = new InMemoryCache();
// const client = new ApolloClient({
//   link,
//   cache,
//   credentials: "include",
//   resolvers: {},
// });

function App() {
  return (
    <div className={styles.app}>
      {/* <DndProvider backend={HTML5Backend}> */}
        {/* <ApolloProvider client={client}> */}
          <Router>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        {/* </ApolloProvider> */}
      {/* </DndProvider> */}
    </div>
  );
}

export default App;

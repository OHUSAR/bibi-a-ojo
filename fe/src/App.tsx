import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {
//   ApolloProvider,
//   HttpLink,
//   ApolloClient,
//   InMemoryCache,
// } from "@apollo/client";

import Home from "./pages/home";

import "./App.scss";

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
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    window.addEventListener("resize", appHeight);
    appHeight();

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Rag from "./pages/rag";
import PageTransition from "./components/common/PageTransition";

import "./index.scss";


ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <PageTransition>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rag" component={Rag} />
      </Switch>
      </PageTransition>

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

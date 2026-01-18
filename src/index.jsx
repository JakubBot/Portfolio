import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import PageTransition from "./components/common/PageTransition";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <PageTransition>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={Projects} />
        </Switch>
      </PageTransition>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);

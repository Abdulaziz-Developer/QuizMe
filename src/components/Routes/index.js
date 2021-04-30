import React from "react";
import { Route, Switch } from "react-router";
import QuestionList from "../QuestionList";

// Components

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <QuestionList />
      </Route>
    </Switch>
  );
};

export default Routes;

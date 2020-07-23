import React from "react";
import { Route, Switch } from "react-router";

// Style
import { GlobalStyle } from "./styles";

// Components
import TaskList from "./components/TaskList";
import Home from "./components/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/task">
          <TaskList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

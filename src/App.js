import React from "react";

// Style
import { GlobalStyle } from "./styles";

// Components
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <GlobalStyle />
      <TaskList />
    </>
  );
}

export default App;

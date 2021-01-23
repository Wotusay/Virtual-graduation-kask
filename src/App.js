import React from "react";
import { Switch, Route } from "react-router-dom";
import { useStores } from "./hooks";

const App = () => {
  const {projectStore} = useStores();
  projectStore.getProjects();
  console.log(projectStore.projects);

  return (
    <p>test</p>
  )
}

export default App;
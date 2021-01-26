import React from "react";
import { Switch, Route } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "./consts";
import Nav from "./components/nav/nav";
import Tour from "./components/tour/tour";



const App = () => {
  return  useObserver(() =>
    <>
      <Nav></Nav>
      <Switch>
        <Route exact path={ROUTES.input}>
            
        </Route>    

        <Route path={ROUTES.home}>
            <Tour></Tour>
        </Route>         
      </Switch>
    </>
  )
}

export default App;
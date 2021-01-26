import React from "react";
import { Switch, Route } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "./consts";
//import Nav from "./components/nav/nav";
import Tour from "./components/tour/tour";
import Input from "./components/input/Input";



const App = () => {
  return  useObserver(() =>

    <>
     <h1 className={'hidden'}> Graduation Expo - Kask </h1>
      <Switch>
        <Route exact path={ROUTES.input}>
            <Input></Input>
        </Route>    

        <Route path={ROUTES.home}>
            <Tour></Tour>
        </Route>         
      </Switch>
    </>
  )
}

export default App;
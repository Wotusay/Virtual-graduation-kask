import React from "react";
import { Switch, Route } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "./consts";
import Nav from "./components/nav/nav";
import Input from "./components/input/Input";
import LandingPage from "./components/landingpage/Landing";



const App = () => {
  return  useObserver(() =>

    <>
     <Nav></Nav>
     <h1 className={'hidden'}> Graduation Expo - Kask </h1>
      <Switch>
        <Route exact path={ROUTES.input}>
            <Input></Input>
        </Route>    

        <Route path={ROUTES.home}>
            <LandingPage></LandingPage>
        </Route>         
      </Switch>
    </>
  )
}

export default App;
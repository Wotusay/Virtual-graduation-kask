import React from "react";
import { Switch, Route } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "./consts";
import Nav from "./components/uiElements/nav/nav";
import LandingPage from "./components/LandingPage/Landing";
import TourPage from "./components/TourPage/TourPage";



const App = () => {
  return  useObserver(() =>

    <>
     <Nav></Nav>
     <h1 className={'hidden'}> Graduation Expo - Kask </h1>
      <Switch>
        <Route exact path={ROUTES.tour.to}>
          <TourPage></TourPage>
        </Route>    
        <Route path={ROUTES.home}>
            <LandingPage></LandingPage>
        </Route>         
      </Switch>
    </>
  )
}

export default App;
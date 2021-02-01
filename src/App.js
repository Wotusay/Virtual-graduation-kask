import React from "react";
import { Switch, Route } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "./consts";
import Nav from "./components/uiElements/nav/nav";
import LandingPage from "./components/LandingPage/Landing";
import TourPage from "./components/TourPage/TourPage";
import DetailPage from "./components/detailPage/DetailPage";



const App = () => {
  return  useObserver(() =>

    <>
     <Nav></Nav>
     <h1 className={'hidden'}> Graduation Expo - Kask </h1>
      <Switch>
        <Route exact path={ROUTES.tour.to}>
          <TourPage></TourPage>
        </Route>   
        <Route exact path={ROUTES.detail}>
            <DetailPage></DetailPage>
        </Route> 
        <Route path={ROUTES.home}>
            <LandingPage></LandingPage>
        </Route>         
      </Switch>
    </>
  )
}

export default App;
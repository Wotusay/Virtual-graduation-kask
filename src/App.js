import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "./consts";
import Nav from "./components/uiElements/nav/nav";
import LandingPage from "./components/landingpage/Landing.js";
import TourPage from "./components/TourPage/TourPage";
import DetailPage from "./components/detailPage/DetailPage";
import { useStores } from "./hooks";



const App = () => {
  const {projectStore} = useStores();
  console.log(projectStore.randomTourProjects.length)

  return  useObserver(() =>

    <>
     <Nav></Nav>
     <h1 className={'hidden'}> Graduation Expo - Kask </h1>
      <Switch>
        <Route exact path={ROUTES.tour}>
          <TourPage></TourPage>
        </Route>   
        <Route exact strict path={ROUTES.tourDetail.path}>
            {projectStore.randomTourProjects.length === 0 ? (<Redirect to={ROUTES.tour} /> ) : <DetailPage></DetailPage> }
        </Route> 
        <Route  path={ROUTES.home}>
            <LandingPage></LandingPage>
        </Route>         
      </Switch>
    </>
  )
}

export default App;
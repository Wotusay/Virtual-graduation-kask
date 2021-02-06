import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "./consts";
import Nav from "./components/uiElements/nav/nav";
import LandingPage from "./components/landingpage/Landing.js";
import TourPage from "./components/TourPage/TourPage";
import DetailPageTour from "./components/detailPageTour/DetailPageTour";
import { useStores } from "./hooks";
import FavouritesPage from "./components/favouritesPage/FavouritesPage";
import DetailPageLikes from "./components/detailPageFavourites/detailPageLikes";



const App = () => {
  const {projectStore} = useStores();
  console.log(projectStore.randomTourProjects.length)

  return  useObserver(() =>

    <>
     <Nav></Nav>
     <h1 className={'hidden'}> Graduation Expo - Kask </h1>
      <Switch>

      <Route exact path={ROUTES.likes}>
          <FavouritesPage></FavouritesPage>
        </Route> 
        <Route exact path={ROUTES.tour}>
          <TourPage></TourPage>
        </Route>
        <Route exact strict path={ROUTES.likesDetail.path}>
            {projectStore.projectLiked.length === 0 ? (<Redirect to={ROUTES.likes} /> ) : <DetailPageLikes></DetailPageLikes> }
        </Route>    
        <Route exact strict path={ROUTES.tourDetail.path}>
            {projectStore.randomTourProjects.length === 0 ? (<Redirect to={ROUTES.tour} /> ) : <DetailPageTour></DetailPageTour> }
        </Route> 
        <Route  path={ROUTES.home}>
            <LandingPage></LandingPage>
        </Route>         
      </Switch>
    </>
  )
}

export default App;
import { useObserver } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { useStores } from '../../hooks';
import Description from '../uiElements/Description';
import LikeButtons from '../uiElements/LikeButtons';
import PictureList from '../uiElements/PicturesList';
import ProgresBar from '../uiElements/ProgressBar';
import styles from './detailpage.module.css'

const DetailPage = () => {
    const [descriptionVisable, setDesriptionVisble] = useState(false);
    const [endOfTour, setEndOfTour] = useState(false);
    const {projectStore} = useStores();
    const history = useHistory();
    const projects = projectStore.randomTourProjects;
    const {id} = useParams();
    const [unCheckAll, setUnCheckAll] = useState(false);

    const hideDescription = () => {
        // To  hide the description
        setDesriptionVisble(true);
        if (descriptionVisable) {
            setDesriptionVisble(false)
        }
    }


    const nextProject = (e) => {
        setUnCheckAll(true);
        let nextId = parseInt(id) + 1;

        if (endOfTour) {
            // If the tour has endee we go back to the likes
            history.push(ROUTES.tour);
            return;
        }
        else {
            // When u click we parse the new id into the url 
            history.push(ROUTES.tourDetail.to + nextId);
        }
    }

    const loadPage = (e) => {
        setUnCheckAll(false);
        // Here we check the next id when we are loading to see if there is a next 
        // project avialable      
        let nextId = parseInt(id) + 1;
        if (projects[nextId] === undefined) {
            setEndOfTour(true);
            return;
        }
    }
 
    return useObserver (() =>{
        if (projects[id] === undefined) {
            // if the doesnt exist we push then back to an existing id;
            return(history.push(ROUTES.tourDetail.to + 0))
         } else {
         return (
            <>
             <div onLoad={(e) => {
                loadPage(e);
             }} className={styles.container}>
                 <h2 id='title' className={styles.title}>{projects[id].name}</h2>
     
                 <PictureList project={projects[id]} ></PictureList>
    

                 <LikeButtons unCheckAll={unCheckAll} project={projects[id]}></LikeButtons>
     
                 <div className={styles.buttons}>
                     <button onClick={(e) => hideDescription(e)} className={styles.buttonYellow}>Who made it?</button>
                     <button onClick={(e) => nextProject(e)} className={styles.buttonGreen}>{ endOfTour ? 'Go to your Favourites' : 'Next work'}</button>
                 </div>                 
                 <Description project={projects[id]} visable={descriptionVisable} ></Description>
                 <ProgresBar project={projects} multiplier={id} ></ProgresBar>
                 </div>
             )
             </>
         )}
        });
}

export default DetailPage;
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
    const hideDescription = () => {
        setDesriptionVisble(true);
        if (descriptionVisable) {
            setDesriptionVisble(false)
        }
    }


    const nextProject = (e) => {
        let nextId = parseInt(id) + 1;
        console.log(nextId)

        if (endOfTour) {
            history.push(ROUTES.tour);
            return;
        }
        else {
            history.push(ROUTES.tourDetail.to + nextId);
        }
    }

    const loadPage = (e) => {        
        let nextId = parseInt(id) + 1;
        if (projects[nextId] === undefined) {
            setEndOfTour(true);
            return;
        }
    }
 
    return useObserver (() =>{
        if (projects[id] === undefined) {
            return(history.push(ROUTES.tourDetail.to + 1))
         } else {
         return (
            <>
             <div onLoad={(e) => {
                loadPage(e);
             }} className={styles.container}>
                 <h2 id='title' className={styles.title}>{projects[id].name}</h2>
     
                 <PictureList project={projects[id]} ></PictureList>
                 <LikeButtons project={projects[id]}></LikeButtons>
     
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
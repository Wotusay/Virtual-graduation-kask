import { useObserver } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../consts';
import { useStores } from '../../../hooks';
import styles from './likebutttons.module.css';

const LikeButtons = ({project,unCheckAll,likesPage}) => {
    // Like Buttons for the randomTour
    const {projectStore,uiStore} = useStores();
    const [chechStateButtonOne, setChechStateButtonOne] = useState(false);
    const [chechStateButtonTwo, setChechStateButtonTwo] = useState(false);
    const projectLikedIds = uiStore.likedProjectsIds;
    const history = useHistory();

    const setLiked = e => {
        // Set the checked state
        setChechStateButtonOne(true);
        setChechStateButtonTwo(false);
    }

    const setUnLiked = e => {
            setChechStateButtonTwo(true);
            setChechStateButtonOne(false);
    }


    const changedInput = e => {
        // Here we check the input
        const likes = project.likes; 
        const id = project.id;
        const target = e.target.value;
        if (target === 'true') {
            // We send the values to the stores to process them
            projectStore.addLikes(id,likes);
            uiStore.addLikedProject(id);
            uiStore.setAllLikedProjectsToStorage();
            uiStore.findAllLikedProjects();
        }

        if (target === 'false') {
            // Here we remove the id and push  go back if we are on likespage
            uiStore.removeIdFromLikedProjects(id);
            if (likesPage) {
                history.push(ROUTES.likes);
            }
        }
    }

    useEffect(() => {
        if ( unCheckAll ) {
            setChechStateButtonOne(false);
            setChechStateButtonTwo(false); 
        } 

        projectLikedIds.map(id => {
            // Here we check if the id is in the uistore if it is then we set the state checked
            if (id === project.id) {
             setChechStateButtonOne(true);
            }
            return id;
        });

    }, [unCheckAll, projectLikedIds, project]);

    return useObserver(() => (
        <div className={styles.liking}>
        <p className={styles.textLiked}>Add it to your favourites</p>
        <div className={styles.liked__wrapperr}>

            <input  checked={unCheckAll ? false : chechStateButtonTwo ? true : false } onClick={(e) => setUnLiked(e)} onInput={(e) => changedInput(e)} className={styles.disliked} name={`like:${project.name}`} id={`disliked:${project.name}`} value={false} type="radio" ></input>
            <label  className={styles.imgDisLiked} htmlFor={`disliked:${project.name}`}>
            </label>

            <input  checked={chechStateButtonOne ? true : unCheckAll ? false : false } onClick={(e) => setLiked(e)} className={styles.liked}  onInput={(e) => changedInput(e)}  name={`like:${project.name}`} id={`liked:${project.name}`} value={true} type="radio" ></input>
            <label className={styles.imgLiked} htmlFor={`liked:${project.name}`}> 
            </label>
        </div>
    </div>
    ))
}

export default LikeButtons;

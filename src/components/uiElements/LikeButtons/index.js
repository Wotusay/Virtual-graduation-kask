import { useObserver } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStores } from '../../../hooks';
import styles from './likebutttons.module.css';

const LikeButtons = ({project,unCheckAll}) => {
    // Like Buttons for the randomTour
    const {projectStore,uiStore} = useStores();
    const [chechStateButtonOne, setChechStateButtonOne] = useState(false);
    const [chechStateButtonTwo, setChechStateButtonTwo] = useState(false);
    const projectLikedIds = uiStore.likedProjectsIds;

    const setLiked =  e => {
        setChechStateButtonOne(true);
        setChechStateButtonTwo(false);
    }

    const setUnLiked = e => {
            setChechStateButtonTwo(true);
            setChechStateButtonOne(false);
    }


    const changedInput = e => {
        const likes = project.likes; 
        const id = project.id;
        const target = e.target.value;
        if (target === 'true') {
            projectStore.addLikes(id,likes);
            uiStore.addLikedProject(id);
            uiStore.setAllLikedProjectsToStorage();
            uiStore.findAllLikedProjects();
        }

        if (target === 'false') {
            uiStore.removeIdFromLikedProjects(id);

        }
    }

    useEffect(() => {
        if ( unCheckAll ) {
            setChechStateButtonOne(false);
            setChechStateButtonTwo(false); 
        } 

        projectLikedIds.map(id => {
            if (id === project.id) {
             setChechStateButtonOne(true);
            }
            return id;
        });

    }, [unCheckAll, projectLikedIds, project]);

    return useObserver(() => (
        <div className={styles.liking}>
        <p className={styles.textLiked}>how do you feel about it</p>
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

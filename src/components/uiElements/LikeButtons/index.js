import React, { useEffect, useState } from 'react';
import { useStores } from '../../../hooks';
import styles from './likebutttons.module.css';

const LikeButtons = ({project,unCheckAll}) => {
    // Like Buttons for the randomTour
    const {projectStore,uiStore} = useStores();
    const [chechStateButtonOne, setChechStateButtonOne] = useState(false);
    const [chechStateButtonTwo, setChechStateButtonTwo] = useState(false);

    
    const setLiked =  e => {
        console.log(e.target.value);
        uiStore.addLikedProject(project);
        uiStore.setAllLikedProjectsToStorage();
        if (e.target.value === 'true') {
            setChechStateButtonOne(true) 
            if(chechStateButtonOne) {
                if (chechStateButtonTwo)  {
                    setChechStateButtonTwo(false);
                }
            }
         } if (!e.target.value) {
            setChechStateButtonTwo(true);
            if (chechStateButtonOne) {
                setChechStateButtonOne(false)
            }
         }
    }

    const setUnLiked = e => {
        if (e.target.value === 'false') {
            setChechStateButtonTwo(true);
            if (chechStateButtonOne) {
                setChechStateButtonOne(false)
            }
         }
    }

    useEffect(() => {
        if ( unCheckAll ) {
            setChechStateButtonOne(false);
            setChechStateButtonTwo(false); 
        } 
    })


    return (
        <div className={styles.liking}>
        <p className={styles.textLiked}>how do you feel about it</p>
        <div className={styles.liked__wrapperr}>

            <input readOnly checked={unCheckAll ? false : chechStateButtonTwo ? true : false } onClick={(e) => setUnLiked(e)} className={styles.disliked} name={`like:${project.name}`} id={`disliked:${project.name}`} value={false} type="radio" ></input>
            <label  className={styles.imgDisLiked} htmlFor={`disliked:${project.name}`}>
            </label>

            <input readOnly  checked={unCheckAll ? false : chechStateButtonOne ? true : false } onClick={(e) => setLiked(e)} className={styles.liked}  name={`like:${project.name}`} id={`liked:${project.name}`} value={true} type="radio" ></input>
            <label className={styles.imgLiked} htmlFor={`liked:${project.name}`}> 
            </label>
        </div>
    </div>
    )
}

export default LikeButtons;

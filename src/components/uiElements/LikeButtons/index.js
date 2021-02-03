import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from './likebutttons.module.css';

const LikeButtons = () => {
    // Like Buttons for the randomTour

    return useObserver(() => (
        <div className={styles.liking}>
        <p className={styles.textLiked}>How u feel about it</p>
        <div className={styles.liked__wrapperr}>

            <input className={styles.disliked} name="like" id="disliked" value={false} type="radio" ></input>
            <label  className={styles.imgDisLiked} htmlFor="disliked">
    
            </label>

            <input className={styles.liked}  name="like" id="liked" value={true} type="radio" ></input>
            <label className={styles.imgLiked} htmlFor="liked"> 
            </label>
        </div>
    </div>
    ))
}

export default LikeButtons;

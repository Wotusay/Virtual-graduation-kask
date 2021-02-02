import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from './likebutttons.module.css';

const LikeButtons = () => {
    return useObserver(() => (
        <div className={styles.liking}>
        <p className={styles.textLiked}>How u feel about it</p>
        <div className={styles.liked__wrapperr}>

            <input className={styles.disliked} name="like" id="disliked" value={false} type="radio" ></input>
            <label  className={styles.imgDisLiked} for="disliked">
    
            </label>

            <input className={styles.liked}  name="like" id="liked" value={true} type="radio" ></input>
            <label className={styles.imgLiked} for="liked"> 
            </label>
        </div>
    </div>
    ))
}

export default LikeButtons;

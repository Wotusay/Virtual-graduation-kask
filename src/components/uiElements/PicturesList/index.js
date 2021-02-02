import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from './picturelist.module.css'

const PictureList = () => {
    return useObserver (() => (
        <>
        <div className={styles.images} >
        <img className={styles.img} alt="picture1" src="../assets/images/EllenDeVos/picture1.png" ></img> 
        <img className={styles.img} alt="picture2" src="../assets/images/EllenDeVos/picture1.png" ></img> 
        <img className={styles.img} alt="picture3" src="../assets/images/EllenDeVos/picture1.png" ></img> 
        <img className={styles.img} alt="picture4" src="../assets/images/EllenDeVos/picture1.png" ></img> 
    </div>
     <p className={styles.helpfull} > SCROLL FOR MORE </p>
    </>
    ));
}

export default PictureList;
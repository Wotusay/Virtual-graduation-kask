import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from './picturelist.module.css'

const PictureList = ({project}) => {
    // List of the images
    return useObserver (() => (
        <>
        <div className={styles.images} >
            {project.pictures.map(pic => (
            <img key={pic}  className={styles.img} alt={`${pic}`} src={`../assets/images/${pic}`} ></img> 
            ))}
    </div>
     <p className={styles.helpfull} > SCROLL FOR MORE </p>
    </>
    ));
}

export default PictureList;
import React from 'react';

import styles from './instutions.module.css';
import Button from '../Button/index.js';
import HoverItem from '../HoverItem';


const Instictution = ({hoverItem}) => {
    // UI Elements for the Favourite 
    return (
        <>
        <h2 className={styles.titleFav}>The <span className={styles.Fav}>Instictutions</span></h2>
        <HoverItem name={hoverItem}></HoverItem> 
        <Button text={'Go to!'} extern={true} pathDefiner={'https://graduation.schoolofarts.be/2020/opleidingen/'}></Button>
        </>
     )
}

export default Instictution;
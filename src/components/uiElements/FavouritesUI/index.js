import React from 'react';

import styles from './Favourites.module.css';
import Button from '../Button/index.js';
import { ROUTES } from '../../../consts/index.js';
import HoverItem from '../HoverItem';


const Favourite = ({hoverItem}) => {
    // UI Elements for the Favourite 
    return (
        <>
        <h2 className={styles.titleFav}>Your <span className={styles.Fav}>Favourites</span></h2>
        <HoverItem name={hoverItem}></HoverItem> 
        <Button text={'Go in!'} pathDefiner={ROUTES.likes}></Button>
        </>
     )
}

export default Favourite;
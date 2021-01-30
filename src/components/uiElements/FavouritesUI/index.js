import React from 'react';

import styles from './Favourites.module.css';
import Button from '../Button/index.js';
import { ROUTES } from '../../../consts/index.js';


const Favourite = () => {
    // UI Elements for the Favourite 
    return (
        <>
        <h2 className={styles.titleFav}>Your <span className={styles.Fav}>Favourites</span></h2>
        <Button text={'Go in!'} pathDefiner={ROUTES.input}></Button>
        </>
     )
}

export default Favourite;
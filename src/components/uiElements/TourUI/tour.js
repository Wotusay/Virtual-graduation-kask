import React from 'react';

import styles from './tour.module.css';
import Button from '../Button/index.js';
import { ROUTES } from '../../../consts/index.js';


const Tour = () => {
    // UI Elements for the tour 
    return (
        <>
        <h2 className={styles.titleTour}>The <span className={styles.tour}>Tour</span> 2021</h2>
        <Button text={'Discover'} pathDefiner={ROUTES.tour}></Button>
        </>
     )
}

export default Tour;
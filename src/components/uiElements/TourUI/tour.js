import React from 'react';

import styles from './tour.module.css';
import Button from '../Button/index.js';
import { ROUTES } from '../../../consts/index.js';
import HoverItem from '../HoverItem';


const Tour = ({hoverItem}) => {
    // UI Elements for the tour 
    return (
        <>
        <h2 className={styles.titleTour}>The <span className={styles.tour}>Tour</span> 2021</h2>
        <HoverItem name={hoverItem}></HoverItem> 
        <Button text={'Discover'} extern={false} pathDefiner={ROUTES.tour}></Button>
        </>
     )
}

export default Tour;
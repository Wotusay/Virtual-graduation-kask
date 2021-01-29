import React from 'react';

import styles from './tour.module.css';
import Button from '../uiElements/Button/index.js';
import { ROUTES } from '../../consts/index.js';


const Tour = () => {
    return (
        <>
        <h2 className={styles.title}>The <span>Tour</span> 2021</h2>
        <Button text={'Ontdek'} pathDefiner={ROUTES.input}></Button>
        </>
     )
}

export default Tour;
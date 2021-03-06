import React from 'react';

import styles from './students.module.css';
import Button from '../Button/index.js';
import HoverItem from '../HoverItem';


const Students = ({hoverItem}) => {
    // UI Elements for the Favourite 
    return (
        <>
        <h2 className={styles.titleFav}>The <span className={styles.Fav}>Students</span></h2>
        <HoverItem name={hoverItem}></HoverItem> 
        <Button text={'Go to!'} extern={true} pathDefiner={'https://graduation.schoolofarts.be/2020/studenten/naam/'}></Button>
        </>
     )
}

export default Students;
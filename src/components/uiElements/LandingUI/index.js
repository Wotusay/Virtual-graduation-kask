import styles from './Landing.module.css'
import React from 'react';
import Rotate from '../Rotate';
import HoverItem from '../HoverItem';

const LandingUI = ({hoverItem}) => {
    return (
        <>     
            <h2 className={styles.titleFirst}>The Virtual <span className={styles.graduation}>Graduation</span> </h2>
            <HoverItem name={hoverItem}></HoverItem> 
            <Rotate></Rotate> 
        </>
        )
}

export default LandingUI;
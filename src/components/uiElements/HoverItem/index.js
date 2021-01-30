import React from 'react';
import styles from './hoveritem.module.css'

const HoverItem = ({name}) => {

    // Each time u hover on an item the right name will be displayed
    
    return (
        <p className={styles.hoverItem}>
            {name}
        </p>
    )
}

export default HoverItem; 
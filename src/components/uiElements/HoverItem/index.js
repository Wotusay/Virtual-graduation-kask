import React from 'react';
import styles from './hoveritem.module.css'

const HoverItem = ({name}) => {
    
    return (
        <p className={styles.hoverItem}>
            {name}
        </p>
    )
}

export default HoverItem; 
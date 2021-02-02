import React from 'react';
import styles from './progressbar.module.css'

const ProgresBar = () => {
    return (
        <div className={styles.progress}>
        <p className={styles.progressText}>PROGRESSION</p>
        <div className={styles.progresBar}>

        <svg className={styles.bar1} width="1358" height="28" viewBox="0 0 1358 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.555664" y="0.0328369" width="293.83" height="27.947" fill="#37AD5D"/>
        </svg>

        <svg className={styles.bar2}width="1358" height="28" viewBox="0 0 1358 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.555664" y="0.0328369" width="1356.89" height="27.947" fill="white"/>
        </svg>
        </div>
    </div>
    )
}

export default ProgresBar;

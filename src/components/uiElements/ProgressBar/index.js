import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from './progressbar.module.css'

const ProgresBar = ({project, multiplier}) => {
    const initialWidth = 1358;
    let multi = parseInt(multiplier) + 1;
    const length = project.length;
    let progressStep = initialWidth / length;
    console.log(length)
    let progressWidth =  progressStep * multi  ; 
    console.log(progressStep, multi, progressWidth );
    
    return useObserver (() => (
        <div className={styles.progress}>
        <p className={styles.progressText}>PROGRESSION</p>
        <div className={styles.progresBar}>

        <svg className={styles.bar1} width={initialWidth} height="28" viewBox="0 0 1358 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.555664" y="0.0328369" width={progressWidth} height="27.947" fill="#37AD5D"/>
        </svg>

        <svg className={styles.bar2} width="1358" height="28" viewBox="0 0 1358 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.555664" y="0.0328369" width="1356.89" height="27.947" fill="white"/>
        </svg>
        </div>
    </div>
    ))
}

export default ProgresBar;

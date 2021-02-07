import { useObserver } from 'mobx-react-lite';
import React from 'react';
import {useMediaQuery} from "react-responsive";

import styles from './progressbar.module.css'

const ProgresBar = ({project, multiplier}) => {
    // Calculaltions for the progress bar so it can update when the id changes.
    const phoneScreen   = useMediaQuery({minWidth:410,maxWidth:768}) ;
    const tabletScreen  = useMediaQuery({minWidth:768,maxWidth:1024}) ;
    const labtopScreen  = useMediaQuery({minWidth:1024,maxWidth:1440}) ;
    const desktopScreen = useMediaQuery({minWidth:1440}) ;
    let initialWidth  = desktopScreen ? 1358 : labtopScreen ? 900 :  tabletScreen ? 600  : phoneScreen ? 380 : 1358;
    let multi = parseInt(multiplier) + 1;
    const length = project.length;
    let progressStep = initialWidth / length;
    let progressWidth =  progressStep * multi  ; 
    
    return useObserver (() => (
        <div className={styles.progress}>
        <p className={styles.progressText}>PROGRESSION</p>
        <div className={styles.progresBar}>

        <svg className={styles.bar1} width={initialWidth} height="28" viewBox={`0 0 ${initialWidth} 28`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.555664" y="0.0328369" width={progressWidth} height="27.947" fill="#37AD5D"/>
        </svg>

        <svg className={styles.bar2} width={initialWidth} height="28" viewBox={`0 0 ${initialWidth} 28`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.555664" y="0.0328369" width={initialWidth} height="27.947" fill="white"/>
        </svg>
        </div>
    </div>
    ))
}

export default ProgresBar;

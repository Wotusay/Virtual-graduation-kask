import React from 'react';
import { MEDIAQUERIES } from '../../../consts';
import styles from './rotate.module.css';
import {useMediaQuery} from "react-responsive";

const Rotate = () => {
    
    const smallScreen = useMediaQuery({minWidth:MEDIAQUERIES.mobile ,maxWidth: MEDIAQUERIES.tablet});
    const normalScreen = useMediaQuery({minWidth:MEDIAQUERIES.labtop ,maxWidth:MEDIAQUERIES.desktop});
    // Indication on how to rotate the item
    return ( 
    <div className={styles.rotate__wrapper}>
    <svg className={styles.rotated}  width="209" height="41.5" viewBox="0 0 340 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="53.3878" cy="30.4496" r="11.3572" fill="#C4C4C4"/>
        <circle cx="120.816" cy="43.388" r="11.3572" fill="#F6C545"/>
        <circle cx="8.00106" cy="8.61397" r="7.50228" fill="#EA7270"/>
        <circle cx="27.9498" cy="20.1162" r="7.50228" fill="#EA7270"/>
        <circle cx="53.3878" cy="30.4496" r="11.3572" fill="#F6C545"/>
        <circle cx="87.1021" cy="38.2188" r="11.3572" fill="#F6C545"/>
        <circle r="11.3572" transform="matrix(-1 0 0 1 287.057 30.7399)" fill="#C4C4C4"/>
        <circle r="11.3572" transform="matrix(-1 0 0 1 219.628 43.6783)" fill="#F6C545"/>
        <circle r="7.50228" transform="matrix(-1 0 0 1 332.443 7.90431)" fill="#EA7270"/>
        <circle r="7.50228" transform="matrix(-1 0 0 1 312.495 20.4066)" fill="#EA7270"/>
        <circle r="11.3572" transform="matrix(-1 0 0 1 287.057 30.7399)" fill="#F6C545"/>
        <circle r="11.3572" transform="matrix(-1 0 0 1 253.342 38.5092)" fill="#F6C545"/>
        <circle cx="170.222" cy="41.8068" r="26.0486" fill="white"/>
    </svg> 
    <p className={styles.rotateInfo}>{normalScreen ? 'Click to rotate' : smallScreen ? 'Drag to rotate' : 'Click to rotate' }</p>
    </div>
    )
}

export default Rotate;
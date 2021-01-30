import React from 'react';
import styles from './tourpage.module.css'  

const TourPage = () => {

    const clickEvent = () => {

    }

    return (
        <>
            <h2 className={styles.titleBegin}>What interest you the <span className={styles.begin}>Most</span> ?</h2>
            <form>

            <div className={styles.button__wrapper}>
            <input type="submit" value="Discover your tour" onClick={(e) => clickEvent(e)} className={styles.discover}></input>
            </div>    
            </form>
        </>
    ) 

}

export default TourPage
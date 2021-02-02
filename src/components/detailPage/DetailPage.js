import React from 'react';
import Description from '../uiElements/Description';
import LikeButtons from '../uiElements/LikeButtons';
import PictureList from '../uiElements/PicturesList';
import ProgresBar from '../uiElements/ProgressBar';
import styles from './detailpage.module.css'

const DetailPage = () => {
    return (
        <>
        <div className={styles.container}>
            <h2 className={styles.title}>Dear people, we have feelings too</h2>

            <PictureList></PictureList>
            <LikeButtons></LikeButtons>

            <div className={styles.buttons}>
                <button className={styles.buttonYellow}>Who made it?</button>
                <button className={styles.buttonGreen}>Next work</button>
            </div>

            <Description></Description>
            <ProgresBar></ProgresBar>
            </div>
        </>
    )
}

export default DetailPage;
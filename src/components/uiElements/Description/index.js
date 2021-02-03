import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from './description.module.css';

const Description = ({project,visable}) => {
    // Desription and general info about the project
    // this  hidden but is visable with an onclick of a the yellow button

    return useObserver(() => (
        <div className={visable ? styles.info__wrapper : styles.hide} >            
        <article className={styles.info}> 
        <div className={styles.titleWrapper}>
        <h3 id='title' className={styles.infoTitle}>{project.name}</h3>
        <p className={styles.madeBy}>
        Door Ellen De Vos
        Mentoren: Michel Druart,
        Wim De Temmerman
        Lut Vandebos </p></div>

        <div className={styles.descriptionWrapper}>
                {
                    project.description.map(line => (
                        <>
                        <p className={styles.description}> 
                            {line}
                        </p>
                        <br/>
                        </>
                    ))
                }
        </div>
    </article>

    <div className={styles.links}>
        <a href={project.url} className={styles.link} >Check the work out</a>
        <a href='www.google.be' className={styles.linkYellow} >Contact the student</a>

    </div>

    </div> 
    ))
}

export default Description;
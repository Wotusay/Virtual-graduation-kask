import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from './description.module.css';

const Description = () => {
    return useObserver(() => (
        <div className={styles.info__wrapper} >            
        <article className={styles.info}> 
        <div className={styles.titleWrapper}>
        <h3 className={styles.infoTitle}>Dear people, 
        we have feelings too</h3>
        <p className={styles.madeBy}>
        Door Ellen De Vos
        Mentoren: Michel Druart,
        Wim De Temmerman
        Lut Vandebos </p></div>

        <div className={styles.descriptionWrapper}>
        <p className={styles.description}> 
        The shrimp is not just a mollusc. He also symbolizes everyone who is just outside our society.
        <br/><br/>
        An animal of which it is still unclear whether it is actually feeling pain is a metaphor for all those who are balancing on the edge. Reach out of the sand with their eyes and only venture to the surface at night.
        <br/><br/>
        The shrimp is never far away, it can be your neighbour. As a shrimp lover I strive for an ethical society where every individual is respected, regardless of his/ her colour, sex, age, species, health and every living being has natural rights.
        <br/><br/>
        That’s what I want to talk about in my short film, the rights of ‘the shrimp’.
        <br/><br/>
        I hope that after watching this life story you will also realize that shrimps have feelings too.
        </p>
        </div>
    </article>

    <div className={styles.links}>
        <a href='www.google.be' className={styles.link} >Check the work out</a>
        <a href='www.google.be' className={styles.linkYellow} >Contact the student</a>

    </div>

    </div> 
    ))
}

export default Description;
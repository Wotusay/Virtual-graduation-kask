import React from 'react';
import styles from './detailpage.module.css'

const DetailPage = () => {
    return (
        <>
        <div className={styles.container}>
            <h2 className={styles.title}>Dear people, we have feelings too</h2>
            <div className={styles.images} >
                <img className={styles.img} alt="picture1" src="../assets/images/EllenDeVos/picture1.png" ></img> 
                <img className={styles.img} alt="picture2" src="../assets/images/EllenDeVos/picture1.png" ></img> 
                <img className={styles.img} alt="picture3" src="../assets/images/EllenDeVos/picture1.png" ></img> 
                <img className={styles.img} alt="picture4" src="../assets/images/EllenDeVos/picture1.png" ></img> 
            </div>

            <p className={styles.helpfull} > SCROLL FOR MORE </p>

            <div className={styles.liking}>
                <p className={styles.textLiked}>How u feel about it</p>
                <div className={styles.liked__wrapperr}>

                    <input className={styles.disliked} name="like" id="disliked" value={false} type="radio" ></input>
                    <label  className={styles.imgDisLiked} for="disliked">
            
                    </label>

                    <input className={styles.liked}  name="like" id="liked" value={true} type="radio" ></input>
                    <label className={styles.imgLiked} for="liked"> 
                    </label>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.buttonYellow}>Who made it?</button>
                <button className={styles.buttonGreen}>Next work</button>
            </div>


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
            </div>
        </>
    )
}

export default DetailPage;
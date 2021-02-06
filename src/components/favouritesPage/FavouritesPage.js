import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { useStores } from '../../hooks';
import styles from './favouritespage.module.css';
import {useMediaQuery} from "react-responsive";
import { MEDIAQUERIES } from '../../consts/index.js';

const FavouritesPage = () => {

    const {projectStore} = useStores();
    const likedProject = projectStore.projectLiked;

    const smallScreen = useMediaQuery({minWidth:MEDIAQUERIES.mobile ,maxWidth: MEDIAQUERIES.tablet});
    const medScreen = useMediaQuery({minWidth:MEDIAQUERIES.tablet, maxWidth:MEDIAQUERIES.labtop})
    const normalScreen =  useMediaQuery({minWidth:MEDIAQUERIES.labtop ,maxWidth:MEDIAQUERIES.desktop});
    return useObserver(() => (
        <>
        <div className={styles.container}>
            <h2 className={styles.titleFav}> 
            Your <span className={styles.Fav}>favourites</span> 
            </h2>

            {likedProject.length === 0 ? 
            <>
            <p className={styles.empty}> Your favourites are empty </p>
            <Link style={{textDecoration: 'none'}} to={ROUTES.tour} > <p className={styles.likeSome}>Go like some</p> </Link>
            </>
            : 
            <div className={styles.gridFav}>
                    {likedProject.map(project => (
                        <Link to={ROUTES.likesDetail.to + likedProject.indexOf(project) } key={project.id} style={{textDecoration: 'none'}}>
                            <img key={project.id} alt={project.name} width="363.04" height="242" src={`../assets/images/${project.pictures[0]}`} />
                            <p key={project.name} className={styles.underTitle}>{project.name}</p>
                        </Link>
                    ))}

            </div> } 
            <img width={normalScreen ? 996 : medScreen ? 450 : smallScreen ? 0 : 996} className={styles.img} alt="background" src="../assets/images/islandFav.png" />


            </div>
        </>
    ))
}

export default FavouritesPage;
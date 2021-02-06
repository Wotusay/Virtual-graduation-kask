import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { useStores } from '../../hooks';
import styles from './favouritespage.module.css';

const FavouritesPage = () => {

    const {projectStore} = useStores();
    const likedProject = projectStore.projectLiked;


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
                        <Link key={project.id} style={{textDecoration: 'none'}}>
                            <img key={project.id} alt={project.name} width="363.04" height="242" src={`../assets/images/${project.pictures[0]}`} />
                            <p key={project.name} className={styles.underTitle}>{project.name}</p>
                        </Link>
                    ))}

            </div> } 


            </div>
        </>
    ))
}

export default FavouritesPage;
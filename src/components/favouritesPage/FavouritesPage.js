import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './favouritespage.module.css';

const FavouritesPage = () => {

    return useObserver(() => (
        <>
        <div className={styles.container}>
            <h2 className={styles.titleFav}> 
            Your <span className={styles.Fav}>favourites</span> 
            </h2>

            <div className={styles.gridFav}>
                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>

                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>

                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>

                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>

                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>

                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>

                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>

                <Link style={{textDecoration: 'none'}}>
                    <img width="363.04" src="../assets/images/EllenDeVos/picture4.png" />
                    <p className={styles.underTitle}>Dear people, we have feelings too</p>
                </Link>
                
            </div>
            </div>
        </>
    ))
}

export default FavouritesPage;
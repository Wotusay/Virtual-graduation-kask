import React from "react";
import { slide as Menu } from 'react-burger-menu'
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../consts";

const Nav = () => {
    const button = {
        bmBurgerButton: {
          position: 'absolute',
          width: '36px',
          height: '30px',
          right: '46px',
          top: '56px'
        },
        bmBurgerBars: {
          background: 'white'
        },

        bmCrossButton: {
          height: 'auto',
          width: '13.4rem',
          position: 'absolute',
          righ:'none',
          top: '20px' ,
          left:'40px'

        },
        bmCross: {
          background: 'none'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#F6C545',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em', 
        },
        bmItem: {
          display: 'grid',
          outline: 'none',
          marginBottom:'5rem'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
      
    return (
        <>
            <Menu customCrossIcon={<img alt='Close menu' src="../assets/images/svgs/closeMenu.svg" ></img>} styles={button} right>
                <div className={styles.firstItem} >
                <Link className={styles.menuItem} style={{ textDecoration: "none" }} to={ROUTES.tour}> <p className={styles.navText}> The Graduation Tour </p></Link></div>
                <div >
                <Link className={styles.menuItem} style={{ textDecoration: "none" }} to={ROUTES.likes}> <p className={styles.navText} >Your Favourites </p> </Link>
                </div>

                <div >
                <Link className={styles.menuItem} style={{ textDecoration: "none" }}> <p className={styles.navText} >Festival </p> </Link>
                </div>
                <div >
                <Link className={styles.menuItem} style={{ textDecoration: "none" }}> <p className={styles.navText} >Agenda </p> </Link>
                </div>

                <div >
                <Link className={styles.menuItem} style={{ textDecoration: "none" }}> <p className={styles.navText} >Institutions </p> </Link>
                </div>

              
                <div className={styles.logoNav}> 
                    <img alt="logo nav" src="../assets/images/logoNav.png" width="250" />
                 </div>
            </Menu>


            <Link to={ROUTES.home}>
            <img width="265.48" className={styles.logo} alt="Logo KASK" src="../assets/images/logo.png" />
            </Link>

            <div className={styles.background}> </div>
        </>
    )
}

export default Nav;
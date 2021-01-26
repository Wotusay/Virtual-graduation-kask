import React from "react";
import styles from "./nav.module.css";

const Nav = () => {
    return (
        <>
            <img className={styles.logo} alt="Logo KASK" src="../assets/images/logo.png" />

            <svg className={styles.menu} width="80" height="46" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.943115 0.566284H79.1333V8.75151H0.943115V0.566284Z" fill="white"/>
            <path d="M13.6133 19.1479H79.1333V27.3332H13.6133V19.1479Z" fill="white"/>
            <path d="M28.9614 37.7296H79.1335V45.9148H28.9614V37.7296Z" fill="white"/>
            </svg>

        </>
    )
}

export default Nav;
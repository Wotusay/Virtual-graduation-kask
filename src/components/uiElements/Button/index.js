import React from 'react';
import styles from './button.module.css';

const Button = ({text}) => {

    return (
        <>
            <div className={styles.button__wrapper}>
            <button className={styles.discover}> {text}</button></div>
        </>
     )


}

export default Button;
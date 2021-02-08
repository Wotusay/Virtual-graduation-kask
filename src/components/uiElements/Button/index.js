import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './button.module.css';

const Button = ({text, pathDefiner, extern}) => {
    const history = useHistory();

    const clickEvent = e => {
        
        if (extern) {
            window.location.href = pathDefiner;
        } else {
            history.push(pathDefiner);

        }
    }

    // Button component

    return (
        <>
            <div className={styles.button__wrapper}>
            <button onClick={(e) => clickEvent(e)} className={styles.discover}> {text}</button></div>
        </>
     )


}

export default Button;
import React, { useState } from 'react';
import { LABELS } from '../../consts';
import styles from './tourpage.module.css';
import { v4 } from "uuid";

const TourPage = () => {

    const [selection, setSelection] = useState([]);
    const [error , setError] = useState('');


    const clickEvent = e => {
        e.preventDefault();
        console.log(selection);
    }

    const checkBoxInput = e => {
        console.log(e.target.checked);
        const inputState = e.target.checked;
        const inputValue = e.target.value;

        if(inputState) {
            setSelection([...selection,inputValue]);
        }

        if(!inputState) {
            setSelection(selection.filter(select => select !== inputValue));
        }
    }

    return (
        <>
            <h2 className={styles.titleBegin}>What interest you the <span className={styles.begin}>Most</span> ?</h2>
            <form>
            <div className={styles.input__wrapper}> 
                {LABELS.map(label => (
                <>
                <input key={v4()} onChange={(e) => checkBoxInput(e) } className={styles.input} type="checkbox" id={label} name={label} value={label}> 
                </input>
                <label key={v4()} className={styles.input__label} htmlFor={label}>{label}</label>
                </>
                ))}
            </div>

            <div className={styles.button__wrapper}>
            <input type="submit" value="Discover your tour" onSubmit={(e) => clickEvent(e)} className={styles.discover}></input>
            </div>    
            </form>
        </>
    ) 

}

export default TourPage;
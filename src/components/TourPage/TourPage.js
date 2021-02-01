import React, { useState } from 'react';
import { LABELS } from '../../consts';
import styles from './tourpage.module.css';
import {useStores} from '../../hooks/index.js';
import { useObserver } from 'mobx-react-lite';


const TourPage = () => {

    const [selection, setSelection] = useState([]);
    const { projectStore } =  useStores();

    const checkBoxInput = e => {
        const inputState = e.target.checked;
        const inputValue = e.target.value;
        projectStore.getProjectsWithTags(selection);
        projectStore.emptyRandomProjects();



        if(inputState) {
            setSelection([...selection,inputValue]);

        }

        if(!inputState) {
            projectStore.emptyProjects();
            setSelection(selection.filter(select => select !== inputValue));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let projects = projectStore.projects;
        let n = selection.length;

        if (selection.length !== 1) {
            const randomPicked = projectStore.getRandom(projects, n);
            console.log(randomPicked);
            let randoms = projectStore.randomTourProjects;

            randoms.map(item => {
               return alert(item.name)
            })


         }

    }

    return useObserver (() => (
        <>
            <h2 className={styles.titleBegin}>What interest you the <span className={styles.begin}>Most</span> ?</h2>
            <form onSubmit={handleSubmit}>
            <div className={styles.input__wrapper}> 
                {LABELS.map(label => (
                <>
                <input onChange={(e) => checkBoxInput(e) } className={styles.input} type="checkbox" id={label} name={label} value={label}> 
                </input>
                <label className={styles.input__label} htmlFor={label}>{label}</label>
                </>
                ))}
            </div>

            <div className={styles.button__wrapper}>
            <input type="submit" value="Discover your tour" className={styles.discover}></input>
            </div>    
            </form>
        </>
    )) 

}

export default TourPage;
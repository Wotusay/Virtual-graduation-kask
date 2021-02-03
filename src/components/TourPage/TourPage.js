import React, { useState } from 'react';
import { LABELS, ROUTES } from '../../consts';
import styles from './tourpage.module.css';
import {useStores} from '../../hooks/index.js';
import { useObserver } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';


const TourPage = () => {

    const [selection, setSelection] = useState([]);
    const { projectStore } =  useStores();
    const history = useHistory();

    const checkBoxInput = async e => {
        const inputState = e.target.checked;
        const inputValue = e.target.value;
        projectStore.emptyRandomProjects();

        if(inputState) {
            setSelection([...selection,inputValue]);
            projectStore.getProjectsWithTags(selection);
            return;

        }

        if(!inputState) {
            projectStore.emptyProjects();
            setSelection(selection.filter(select => select !== inputValue));
            return;
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let projects = projectStore.projects;
        let n = selection.length;

        if (selection.length !== 1) {
            try {
                const randomPicked = projectStore.getRandom(projects, n);
                console.log(randomPicked);
                history.push(ROUTES.tourDetail.to + 0);
            }
            catch(error) {
                projectStore.emptyProjects();
                projectStore.emptyRandomProjects();
            }
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
import React, { useState } from 'react';
import { LABELS, ROUTES } from '../../consts';
import styles from './tourpage.module.css';
import {useStores} from '../../hooks/index.js';
import { useObserver } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';


const TourPage = () => {
    // The full tour input page
    const [selection, setSelection] = useState([]);
    const { projectStore } =  useStores();
    const history = useHistory();
    const [error,setError] = useState('');

    const checkBoxInput = async e => {
        // Checking the input of the checkbuttons 
        const inputState = e.target.checked;
        const inputValue = e.target.value;
        // Emptying the randomprojects to avoid duplicates or more items then 4
        projectStore.emptyRandomProjects();

        if(inputState) {
            // Setting the selection
            setSelection([...selection,inputValue]);
            // Getting all the projects with the tags
            projectStore.getProjectsWithTags(selection);
            return;

        }

        if(!inputState) {
            // Emptying the projects when u disable one and removing it from the selection
            projectStore.emptyProjects();
            setSelection(selection.filter(select => select !== inputValue));
            // Then adding them back with the new selection that has been made
            projectStore.getProjectsWithTags(selection);
            return;
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Checking the projects
        let projects = projectStore.projects;
        let n = selection.length;


        if(n <= 1) {
            setError('Select more items!')
         }

        if (selection.length >= 2) {
            setError('')

            // if the lenght is less then 1  the tour wont start
            try {
                // Getting the random projects and pushing to the next page
                projectStore.getRandom(projects, n);
                history.push(ROUTES.tourDetail.to + 0);
            }
            catch(error) {
                setError('Oops something went wrong try again')
                // If there is an error he will  empty the selctions and u have to do it agian
                projectStore.emptyProjects();
                projectStore.emptyRandomProjects();
            }
         }

    }

    return useObserver (() => (
        <>
            <h2 className={styles.titleBegin}>What interests you <span className={styles.begin}>Most</span> ?</h2>
            <p className={styles.error}>{error}</p>
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

            <img className={styles.pictureInput} src="../assets/images/backggroundTour.png" alt="background"/>
        </>
    )) 

}

export default TourPage;
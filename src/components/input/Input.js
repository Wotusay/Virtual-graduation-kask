import React, {useState} from "react";
import { useStores } from "../../hooks";
import { useObserver } from "mobx-react-lite";


const Input = () => {
  const {projectStore} = useStores();
  projectStore.getProjects();

  // These are all the projects with all the same tag
  let tagOne = ['VREXP-1','VREXP-2','VREXP-3','VREXP-4'];
  let tagTwo = ['MOVIE-1','MOVIE-2','MOVIE-3','MOVIE-4'];
  let tagThree = ['INSTA-1','INSTA-2','INSTA-3','INSTA-4'];
  let tagFour = ['POD-1','POD-2','POD-3','POD-4'];

  const [tags, setTags] = useState([]);

  const [disableButtonOne, setDisableOne] = useState(false); 
  const [disableButtonTwo, setDisableTwo] = useState(false); 
  const [disableButtonThree, setDisableThree] = useState(false); 
  const [disableButtonFour, setDisableFour] = useState(false); 
  const [error, setError] = useState(''); 


  const [firstSecttion, setFirstSection] = useState("visible");
  const [secondSecttion, setSecondSection] = useState("hidden");

  const [costumExpierence, setCostumExperience] = useState([]);


  const pickTag = e => {
    const target = e.target.id;
    setError('');
    setTags([...tags, target ]);
    generateCostumExperience(target);
    return target === '1' ?  setDisableOne(true) : target === '2' ? setDisableTwo(true) : target
    === '3' ? setDisableThree(true) : target === '4' ? setDisableFour(true) : '';
    // Here we pick and disable the button so we dont have 2 of the same tag each time. 
    // We Also set the generated costum expierence so we can call that back later
  }

  const deleteTag = e  => {
    const target = e.target.id;
    setError('');
    setTags(tags.filter(tag => tag !== target));
    deleteItemsFromCostumExperience(target);

    return target === '1' ?  setDisableOne(false) : target === '2' ? setDisableTwo(false) : target
    === '3' ? setDisableThree(false) : target === '4' ? setDisableFour(false) : '';
    // Here we remove the tags form the list that we selected and we enable the button back
  }

  const submitTags = e  => {
    console.log(tags.length);
    if (tags.length <= 1) {
      setError('Pak meer tags!');
      // This is a check up to see if the user picked tags in the begin
    }
    else {
      // if he picked some he can enjoy his tour
      setError('');
      setFirstSection('hidden');
      setSecondSection('visible');
      console.log(costumExpierence);

    }
  }

  const generateCostumExperience = target => {
            if (target === '1') {
              // Here we pick a random item form the list that has been made for us with the same tag we clicked on
              // This insures that we have the experience ready!
              setCostumExperience([...costumExpierence, tagOne[Math.floor(Math.random()*tagOne.length)]]);
            }

            if (target === '2') {
              setCostumExperience([...costumExpierence, tagTwo[Math.floor(Math.random()*tagTwo.length)]]);
            }

            if (target === '3') {
              setCostumExperience([...costumExpierence, tagThree[Math.floor(Math.random()*tagThree.length)]]);
            }

            if (target === '4') {
              setCostumExperience([...costumExpierence, tagFour[Math.floor(Math.random()*tagFour.length)]]);
            }
          return;
    }

const deleteItemsFromCostumExperience = target => {
      if (target === '1') {
        // Here we delete the experience we made for him if he changed his mind.
        // He always gets a new result wich is the plan!
        setCostumExperience(costumExpierence.filter(experience => !tagOne.includes(experience)));
        console.log(costumExpierence);
      }

      if (target === '2') {
        setCostumExperience(costumExpierence.filter(experience => !tagTwo.includes(experience)));
      }

      if (target === '3') {
        setCostumExperience(costumExpierence.filter(experience => !tagThree.includes(experience)));
      }

      if (target === '4') {
        setCostumExperience(costumExpierence.filter(experience => !tagFour.includes(experience)));
      }
    return;
}


  return  useObserver(() =>
    <>
    <p>{error}</p>
    <div style={{visibility: firstSecttion}}>
    <div>
      
      <p>Items picked</p>
      {tags.map(tag =>  (
        <p key={tag} id={tag} onClick={(e) => deleteTag(e)} >{`Tag ${tag}`}</p>
      ))}
    </div>

    <button id="1" disabled={disableButtonOne} onClick={(e)=> pickTag(e) }>Tag 1</button>
    <button id="2" disabled={disableButtonTwo}  onClick={(e)=> pickTag(e) }>Tag 2</button>
    <button id="3" disabled={disableButtonThree} onClick={(e)=> pickTag(e) }>Tag 3</button>
    <button id="4" disabled={disableButtonFour} onClick={(e)=> pickTag(e) }>Tag 4</button>
    <button onClick={(e) => submitTags(e)}>Submit</button>
    </div>
    <div style={{visibility: secondSecttion}}>
      <p> You picked these tags</p>
      {tags.map(tag =>  (
        <p key={tag} id={tag}>{`Tag ${tag}`}</p>
      ))}
      <p> And u will get experience </p>
        {costumExpierence.map(project => (
              <p key={project}>{project}</p>
        ))}


    </div>
    </>
  )
}

export default Input;
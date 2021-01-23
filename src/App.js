import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import { useStores } from "./hooks";
import { useObserver } from "mobx-react-lite";


const App = () => {
  const {projectStore} = useStores();
  projectStore.getProjects();
  const [tags, setTags] = useState([]);
  console.log(projectStore.projects);
  const [disableButtonOne, setDisableOne] = useState(false); 
  const [disableButtonTwo, setDisableTwo] = useState(false); 
  const [disableButtonThree, setDisableThree] = useState(false); 
  const [disableButtonFour, setDisableFour] = useState(false); 

  let picks = [];
  let number= 1

  const pickTag = e => {
    const target = e.target.id;
    
    setTags([...tags, target ]);

    return target === '1' ?  setDisableOne(true) : target === '2' ? setDisableTwo(true) : target
    === '3' ? setDisableThree(true) : target === '4' ? setDisableFour(true) : '';
    
  }

  const deleteTag = e  => {
    const target = e.target.id;
    
    setTags(tags.filter(tag => tag !== target));

    return target === '1' ?  setDisableOne(false) : target === '2' ? setDisableTwo(false) : target
    === '3' ? setDisableThree(false) : target === '4' ? setDisableFour(false) : '';
  }

  return  useObserver(() =>
    <>
    <div>
      <p>Items picked</p>
      {tags.map(tag =>  (
        <p id={tag} onClick={(e) => deleteTag(e)} >{`Tag ${tag}`}</p>
      ))}
    </div>

    <button id="1" disabled={disableButtonOne} onClick={(e)=> pickTag(e) }>Tag 1</button>
    <button id="2" disabled={disableButtonTwo}  onClick={(e)=> pickTag(e) }>Tag 2</button>
    <button id="3" disabled={disableButtonThree} onClick={(e)=> pickTag(e) }>Tag 3</button>
    <button id="4" disabled={disableButtonFour} onClick={(e)=> pickTag(e) }>Tag 4</button>
    <button>Submit</button>
    </>
  )
}

export default App;
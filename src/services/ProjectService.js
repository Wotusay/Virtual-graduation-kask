import "firebase/firestore";
import {projectConverter} from '../models/Project';

class ProjectService{ 
    constructor(firebase){
        this.db = firebase.firestore();
    }

    getProject = async projectId => {
         const item = await this.db
          .collection("projects")
          .doc(projectId)
          .withConverter(projectConverter)
          .get();

          return item.data();
      };
}

export default ProjectService;

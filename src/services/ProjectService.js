import "firebase/firestore";
import {projectConverter} from '../models/Project';

class ProjectService{ 
    constructor(firebase){
        this.db = firebase.firestore();
    }

    getProject = async projectId => {
        // Getting them out of the firestore with the given id
         const item = await this.db
          .collection("projects")
          .doc(projectId)
          .withConverter(projectConverter)
          .get();
          return item.data();
      };

      getAllProjectsWithTag = async tag => {
        let data = [];
        await this.db.collection("projects")
        .where("tag", "array-contains", tag).withConverter(projectConverter).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
                if (doc !== undefined) {
                    let project = doc.data();
                    let projectAlreadyPushed = data.findIndex(item => item.id === project.id);
                    if (projectAlreadyPushed === -1) {
                        data.push(project);
                    } else {
                        return;
                    }
                }
                if (doc === undefined) {
                    return;
                }
            });
        });
        return data;
      }
}

export default ProjectService;

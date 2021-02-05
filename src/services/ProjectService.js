import "firebase/firestore";
import {projectConverter} from '../models/project';

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
        // Here we store all the data from all the tags we collcected an return it back
        let data = [];
        await this.db.collection("projects")
        .where("tag", "array-contains", tag).withConverter(projectConverter).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
                // Here we check if there actualy is a project with an tag
                if (doc !== undefined) {
                    let project = doc.data();
                    // Here we check if dont send double data trough the next item
                    let projectAlreadyPushed = data.findIndex(item => item.id === project.id);
                    if (projectAlreadyPushed === -1) {
                        // if everything is alright we send them to  the array
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
        //  Then we send back the  data we collected
        return data;
      }

      setLiked = async (id, likes) => {
          console.log(id,likes)
          await this.db.collection("projects").doc(id)
          .update({'likes': likes});
      }
}

export default ProjectService;

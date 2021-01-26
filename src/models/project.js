import { v4 } from "uuid";
import { decorate, observable } from "mobx";

class Project {
    constructor({ id= v4() , name, store, description, pictures = [], likes, url, students = [], tag = [] }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.pictures = pictures;
        this.likes = likes;
        this.url = url;
        //Welke studenten er aangewerkt hebben
        this.students = students;
        this.store = store;

        // Hoe een project een tag kan hebben. die dan gebruikt wordt 
        // voor randomizen. 
        this.tag = tag;
    }
}

decorate(Project, {
    likes: observable
})

// Data that comes form the firestore needs to be converterd to the 
// Model this function does this
const projectConverter = {
    toFirestore: function(project) {
        return {
            name: project.name, 
            description: project.description,
            likes: project.likes, 
            url: project.url,
            pictures: project.pictures, 
            tag: project.tag
        };
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options); 
        return new Project({
            id: snapshot.id,
            name: data.name,
            description: data.description,
            likes: data.likes,
            url: data.url,
            pictures: data.pictures,
            tag: data.tag
        });
    }
};

export {projectConverter};
export default Project;
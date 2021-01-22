import { decorate, observable, action } from "mobx";

class ProjectStore {
    constructor(rootStore) {
        this.rootStore = rootStore; 
        this.projects = [];
        
    }
}

export default ProjectStore;
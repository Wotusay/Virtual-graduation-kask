import { decorate, observable } from "mobx";
import ProjectService from "../services/ProjectService";

class ProjectStore {
    constructor(rootStore) {
        this.rootStore = rootStore; 
        this.projectService = new ProjectService(this.rootStore.firebase);
        this.projects = [];
    }

    getProjects = async () => {
        // Getting all the projects form the database that are needed
        const project = await this.projectService.getProject("LiHhRZqvmIooMVsjsqNP");
        this.addProject(project);
      };

    addProject = project => { 
        // Setting the items in the store to acces them
        let projectExist = this.projects.findIndex(item => item.id === project.id);
        if(projectExist === -1) {
            this.projects.push(project);
        } else {
            return;
        }
    }
}

decorate(ProjectStore, {
    projects: observable
  });

export default ProjectStore;
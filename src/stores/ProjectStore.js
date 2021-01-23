import { decorate, observable, action } from "mobx";
import ProjectService from "../services/ProjectService";

class ProjectStore {
    constructor(rootStore) {
        this.rootStore = rootStore; 
        this.projectService = new ProjectService(this.rootStore.firebase);
        this.projects = [];
    }

    getProjects = async () => {
        const project = await this.projectService.getProject("LiHhRZqvmIooMVsjsqNP");
        this.addProject(project);
      };

    addProject = project => { 
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
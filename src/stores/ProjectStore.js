import { action, decorate, observable } from "mobx";
import ProjectService from "../services/ProjectService";

class ProjectStore {
    constructor(rootStore) {
        this.rootStore = rootStore; 
        this.projectService = new ProjectService(this.rootStore.firebase);
        this.projects = [];
        this.randomTourProjects = [];
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

    getProjectsWithTags = async tags => {
        tags.forEach( async tag => {
            const projectsWithTag = await this.projectService.getAllProjectsWithTag(tag);
            if (projectsWithTag.length !== 0) {
                projectsWithTag.forEach(async project => {
                    this.addProject(project);
                });
            }
            else {
                console.log(`there are ${projectsWithTag.length} found`);
                return;
            }
        });
    }
    
    emptyProjects = () => {
        if (this.projects.length !== 0) {
            return this.projects = []
        } else {
            return;
        }
    }

    emptyRandomProjects = () => {
        if (this.randomTourProjects.length !== 0) {
            return this.randomTourProjects = []
        } else {
            return;
        }
    }

    addRandomProjects = project => {
        let projectExist = this.randomTourProjects.findIndex(item => item.id === project.id);
        if(projectExist === -1) {
            this.randomTourProjects.push(project);
        } else {
            return;
        }
    }


    getRandom = (arr, n) => {
        if (n >= 4) {
            n = 4;
        };
        
        let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }

        result.forEach(project => {
            
            this.addRandomProjects(project);
        });
        
        return result;
    }

}

decorate(ProjectStore, {
    projects: observable,
    randomTourProjects:observable,
    filterProjects: action,
    makeRandomProjectTour:action,
    getProjectsWithTags: action,
    emptyProjects:action,
    getRandom: action,
  });

export default ProjectStore;
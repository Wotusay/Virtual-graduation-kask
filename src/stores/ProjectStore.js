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
        // Here we are getting all the projects with the clicked tag
        tags.forEach( async tag => {
            const projectsWithTag = await this.projectService.getAllProjectsWithTag(tag);
            if (projectsWithTag.length !== 0) {
                // if its less then 0  we push it to the projects
                projectsWithTag.forEach(async project => {
                    this.addProject(project);
                });
            }
            else {
                // if we found 0 he will give the following error
                console.log(`there are ${projectsWithTag.length} found`);
                return;
            }
        });
    }
    
    emptyProjects = () => {
        // Here we empty all the projects
        if (this.projects.length !== 0) {
            return this.projects = []
        } else {
            return;
        }
    }

    emptyRandomProjects = () => {
        // Here we empty all the random projects
        if (this.randomTourProjects.length !== 0) {
            return this.randomTourProjects = []
        } else {
            return;
        }
    }

    addRandomProjects = project => {
        // Here we add all the random projects
        let projectExist = this.randomTourProjects.findIndex(item => item.id === project.id);
        if(projectExist === -1) {
            this.randomTourProjects.push(project);
        } else {
            return;
        }
    }


    getRandom = (arr, n) => {
        // Here we select a random project out of the existing project array
        if (n >= 4) {
            // if the array lenght is more than 4 we  set it back to 4 
            // This is because it does not take alot of time to go trough the projects 
            n = 4;
        };
        
        let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
        if (n > len)
            // if we picked more array elements then we actualy have we display this error  
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            // Here we pick a random array element then push it in the result to then add it 
            // in our randmtourprojects array
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
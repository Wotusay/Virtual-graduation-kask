//import { decorate, observable, action } from "mobx";
import { decorate, observable, action } from "mobx";
import localStorage from 'mobx-localstorage';

class UiStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.likedProjectsIds = [];
    }

    addLikedProject = id => {
        // Here we add an id to tthe likedprojects id
        let likedProjectExist = this.likedProjectsIds.findIndex(item => item === id);
        if (likedProjectExist === -1) {
            this.likedProjectsIds.push(id);
        } else {
            return;
        }
    }

    setAllLikedProjectsToStorage = () => {
        // Here we set all the new ids into the localstorage
        const json = JSON.stringify(this.likedProjectsIds)
        localStorage.setItem('likes', json);
    }

    findAllLikedProjects = () => {
        // Here we get all the items form the storage and place them
        // in the projectstore and we keep the id in the ui store
        const itemsFormStorage = JSON.parse(localStorage.getItem('likes'));
        
        if (itemsFormStorage === null) {
            return;
        } else {
            itemsFormStorage.forEach(id => {
                this.addLikedProject(id);
                this.rootStore.projectStore.getLikedProjects(id);
            });
        }
    }

    removeIdFromLikedProjects = (id) => {
        // Here we remove an id from the array and reload evything to remove it
        this.likedProjectsIds.splice(this.likedProjectsIds.findIndex(item => item === id),1);
        if( this.likedProjectsIds.length >= 0) {
            const json = JSON.stringify(this.likedProjectsIds);
            localStorage.setItem('likes', json);
            this.rootStore.projectStore.removeLikedProjects(id);
            this.findAllLikedProjects();
        }
    }

}


decorate(UiStore, {
    likedProjectsIds: observable,
    setAllLikedProjectsToStorage: action,
    removeIdFromLikedProjects:action
});



export default UiStore;
//import { decorate, observable, action } from "mobx";
import { decorate, observable, action } from "mobx";
import localStorage from 'mobx-localstorage';

class UiStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.likedProjectsIds = [];
    }

    addLikedProject = id => {
        let likedProjectExist = this.likedProjectsIds.findIndex(item => item === id);
        if (likedProjectExist === -1) {
            this.likedProjectsIds.push(id);
        } else {
            return;
        }
    }

    setAllLikedProjectsToStorage = () => {
        const json = JSON.stringify(this.likedProjectsIds)
        localStorage.setItem('likes', json);
    }

    findAllLikedProjects = () => {
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
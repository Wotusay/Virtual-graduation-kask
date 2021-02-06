//import { decorate, observable, action } from "mobx";
import { decorate, observable, action } from "mobx";
import localStorage from 'mobx-localstorage';

class UiStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.likedProjectsIds = [];
    }

    addLikedProject = project => {
        let likedProjectExist = this.likedProjectsIds.findIndex(item => item === project.id);
        if (likedProjectExist === -1) {
            this.likedProjectsIds.push(project.id);
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
                this.likedProjectsIds.push(id);
                this.rootStore.projectStore.getLikedProjects(id);
            });
        }
    }
}


decorate(UiStore, {
    likedProjectsIds: observable,
    setAllLikedProjectsToStorage: action
});



export default UiStore;
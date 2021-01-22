import {configure} from 'mobx';
import ProjectStore from './ProjectStore';
import StudentStore from './StudentStore';
import UiStore from './UiStore';


configure({ enforceActions: "observed" });

class RootStore {

    constructor() {
        // Calling the stores to make it easier to get them all
        this.projectStore = new ProjectStore(this);
        this.uiStore = new UiStore(this);
        this.studentStore = new StudentStore(this);

    }

}

export default RootStore;
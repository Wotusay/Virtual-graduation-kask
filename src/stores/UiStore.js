//import { decorate, observable, action } from "mobx";

class UiStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}

export default UiStore;
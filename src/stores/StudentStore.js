import { decorate, observable, action } from "mobx";

class StudentStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.students = [];
    }
}

export default StudentStore;
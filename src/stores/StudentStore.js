//import { decorate, observable, action } from "mobx";
import StudentService from "../services/StudentService";

class StudentStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.studentService = new StudentService(this.rootStore.firebase);
        this.students = [];
    }
}

export default StudentStore;
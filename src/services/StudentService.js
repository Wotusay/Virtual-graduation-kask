import "firebase/firestore";
//import {projectConverter} from '../models/Project';

class StudentService { 
    constructor(firebase) {
        this.db = firebase.firestore();
    }
}

export default StudentService;
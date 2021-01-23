import { v4 } from "uuid";

class Student {
    constructor({id= v4(), name, email, opleiding, project}) {
        this.id = id ;
        this.name = name; 
        this.email = email;
        this.opleiding = opleiding;
        this.project = project;
    }
}

export default Student;
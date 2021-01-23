import { v4 } from "uuid";

class User {
    constructor({id = v4()}) {
        this.id = id;
        this.projects = [];
    }
}

export default User;
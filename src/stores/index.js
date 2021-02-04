import ProjectStore from './ProjectStore';
import StudentStore from './StudentStore';
import UiStore from './UiStore';
import * as firebase from "firebase/app";


class RootStore {

    constructor() {
        var firebaseConfig = {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: process.env.REACT_APP_authDomain,
            databaseURL: process.env.REACT_APP_databaseURL,
            projectId: process.env.REACT_APP_projectId,
            storageBucket: process.env.REACT_APP_storageBucket,
            messagingSenderId: process.env.REACT_APP_messagingSenderId,
            appId: process.env.REACT_APP_appId
          };

        // Calling the stores to make it easier to get them all
        this.firebase = firebase.initializeApp(firebaseConfig);
        this.projectStore = new ProjectStore(this);
        this.uiStore = new UiStore(this);
        this.studentStore = new StudentStore(this);
        

    }


}

export default RootStore;
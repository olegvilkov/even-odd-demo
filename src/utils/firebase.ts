// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// App Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqJjx4Zl6gGO_dnkKWUxarmKYW_NySvsc",
    authDomain: "evenodd-demo.firebaseapp.com",
    databaseURL: "https://evenodd-demo.firebaseio.com",
    projectId: "evenodd-demo",
    storageBucket: "evenodd-demo.appspot.com",
    messagingSenderId: "972654850922",
    appId: "1:972654850922:web:f86219ed90100c31efeb13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

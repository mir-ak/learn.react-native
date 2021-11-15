
import { initializeApp } from "firebase/app";
import {firebase}  from "@react-native-firebase/database";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyA-RRxTMgI35qznBlEWHrYDLhVZUD9wZ6w",
  authDomain: "yetapp-54164.firebaseapp.com",
  databaseURL:'https://yetapp-54164-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: "yetapp-54164",
  storageBucket: "yetapp-54164.appspot.com",
  messagingSenderId: "306163568486",
  appId: "1:306163568486:web:f11919a84730986c6642a7"
};

const firebaseApp = initializeApp(firebaseConfig);

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const FirebaseApp =  firebase.app();

const auth = getAuth(firebaseApp);
export{auth};
export default FirebaseApp;
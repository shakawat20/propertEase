
import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebaseKey'
import { getAuth } from "firebase/auth";





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth
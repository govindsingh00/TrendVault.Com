

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAIS-2N3sIAOQXFZGP72VGjFHs1lIjjsH8",
  authDomain: "trendvault-67db2.firebaseapp.com",
  projectId: "trendvault-67db2",
  storageBucket: "trendvault-67db2.firebasestorage.app",
  messagingSenderId: "433586877920",
  appId: "1:433586877920:web:63ffe8d1e5cf8591a9a785",
  measurementId: "G-WRNV3CW2G6"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{app, auth, db};
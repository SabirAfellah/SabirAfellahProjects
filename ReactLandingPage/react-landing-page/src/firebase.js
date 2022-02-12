import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyBDa782TH2PXz8v9BAk5NeqeI23bV0dhPc",
    authDomain: "react-url-shortner.firebaseapp.com",
    projectId: "react-url-shortner",
    storageBucket: "react-url-shortner.appspot.com",
    messagingSenderId: "884256504009",
    appId: "1:884256504009:web:0ee6480a324e760ca03518",
    measurementId: "G-17FCJLJCDV"
  
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();

export default db;
  



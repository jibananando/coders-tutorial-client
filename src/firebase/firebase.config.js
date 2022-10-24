// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGvDiemN9B29IclFXnMCaOdgIN0PPZ-lw",
    authDomain: "coders-tutorial.firebaseapp.com",
    projectId: "coders-tutorial",
    storageBucket: "coders-tutorial.appspot.com",
    messagingSenderId: "970345528296",
    appId: "1:970345528296:web:7afec8ffcc9b0f414e825d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
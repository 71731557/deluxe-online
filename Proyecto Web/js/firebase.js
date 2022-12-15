// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVHLw9DON9-6-fj5Wf3jXoNyNqZNnwJaw",
    authDomain: "fb-registro-cb170.firebaseapp.com",
    projectId: "fb-registro-cb170",
    storageBucket: "fb-registro-cb170.appspot.com",
    messagingSenderId: "957785835940",
    appId: "1:957785835940:web:8b2329c4e9aa4a69f25931"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
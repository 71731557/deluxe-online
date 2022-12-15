import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { db } from './firebase.js'

// Add a second document with a generated ID.

try {
    const docRef = await addDoc(collection(db, "coments"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
    });

    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}





// var tumare = document.getElementById('task-form');
// tumare.addEventListener("submit", (eve) => {
//     eve.preventDefault();
//     console.log("capturado");
// })




// window.addEventListener("DOMContentLoaded", () => {
//     console.log("log")
// })
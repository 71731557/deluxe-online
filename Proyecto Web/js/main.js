import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from './firebase.js'
import { loginCheck } from './logincheck.js'
import { showMessage } from "./showMessage.js";
import './signupform.js'
import './signinForm.js'
import './logout.js'

const verCarrito = document.getElementById("verCarrito");


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
   
    if (user) {
        verCarrito.style.display = "block"
        
        
    } else {
        verCarrito.style.display = "none"
        showMessage("Para poder comprar Inicie Sesion o Registrese")
    }
})
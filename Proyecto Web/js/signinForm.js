import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js"

const signInForm = document.querySelector("#InicioSesion-form");

signInForm.addEventListener("submit", async e => {
    e.preventDefault();

    const email = signInForm["IniciarSesion-email"].value;
    const password = signInForm["InicioSesion-contraseña"].value;


    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector("#InicioSesionModal"))
        modal.hide()

        showMessage("BIENVENIDO "+ credentials.user.email)

    } catch (error) {
        if (error.code === "auth/wrong-password"){
            showMessage("Contraseña Incorrecta", "error")
        } else if (error.code === "auth/user-not-found"){
            showMessage("Usuario no encontrado", "error")
        } else {
            showMessage(error.message, "error")
        }
    }

})

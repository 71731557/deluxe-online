import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const RegistroForm = document.querySelector("#Registro-form");

RegistroForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = RegistroForm['Registro-email'].value;
    const password = RegistroForm['Registro-contraseña'].value;

    console.log(email, password)

    try {
        const userCredenciales = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredenciales)

        const signupModal = document.querySelector("#RegistroModal")
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

        showMessage("Bienvenido " + userCredenciales.user.email)



    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            showMessage("El correo ya esta en uso", "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage("Correo Invalido", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña es demasiado debil", "error")
        } else if (error.code) {
            showMessage(error.message, "error")
        }
    }
})

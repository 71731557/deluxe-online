import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import { auth } from './firebase.js'
import { loginCheck } from './logincheck.js'
import './signupform.js'
import './signinForm.js'
import './logout.js'



onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    //if (user) {
    //    loginCheck(user)
    //} else {
    //    loginCheck(user)
    //}
})
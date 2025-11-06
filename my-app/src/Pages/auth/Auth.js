// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzG1RGgiGdSLv5TKPaWzgtD9NQorUMQoY",
    authDomain: "doudle-app.firebaseapp.com",
    projectId: "doudle-app",
    storageBucket: "doudle-app.firebasestorage.app",
    messagingSenderId: "37574276758",
    appId: "1:37574276758:web:8c8559b4091298002434b7",
    measurementId: "G-5JZXGF68VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);


document.addEventListener("DOMContentLoaded", function() {
    const signup_google = document.getElementById("signup-google");
    const signup_form = document.getElementById("signUp-form");
    if (signup_form) {
        signup_form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            const signup_email = document.getElementById('signup-email').value;
            const signup_password = document.getElementById('signup-pass').value;
            const emailerror = document.getElementById('email-error');
            const passwordErrorDiv = document.getElementById('password-error');
            // Email validation regex (simple version)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

            let valid = true;
            if(!emailRegex.test(signup_email)){
                emailerror.textContent = "Enter a valid email address";
                valid = false;
            } else {
                emailerror.textContent = "";
            }

            if (!passRegex.test(signup_password)) {
                passwordErrorDiv.textContent = "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
                valid = false;
            }else {
                passwordErrorDiv.textContent = "";
            }

            if (!valid) return;

            createUserWithEmailAndPassword(auth, signup_email, signup_password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Signing in...");
                });
        });
    }
});



/*googlelogin.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email && password) {
        // Call your login function here
        console.log("Logging in with email:", email);
        // Example: loginWithEmail(email, password);
    } else {
        alert("Please enter both email and password.");
    }
});*/
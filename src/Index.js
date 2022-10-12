// import { getAuth. onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSExOJ9sJ6ipBogtLDborFNjOfUwpFo0Q",
  authDomain: "social-networks16.firebaseapp.com",
  projectId: "social-networks16",
  storageBucket: "social-networks16.appspot.com",
  messagingSenderId: "1036377589316",
  appId: "1:1036377589316:web:c795ce940f4221e3735e11",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

console.log("configuración realizada: ", app);

const auth = getAuth(app);

//Formula para registrar usuario con Firebase

export const registrar = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("registro correcto");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error: ", errorCode, errorMessage);
    });
};

//Formula para ingresar a la cuenta con Firebase

export const ingresar = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("ingreso correcto");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error:", errorCode, errorMessage);
    });
};

// import { getAuth. onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

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

//Función para registrar usuario con Firebase

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

//Función para ingresar a la cuenta con Firebase

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

//Función para ingresar con Google

export const ingresoGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      //console.log("ingreso Google correcto");//
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error Google:", errorCode, errorMessage, email, credential);
      // ...
    });
  /*getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      //console.log("recibidos datos");//
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log("error datos recibidos:", errorCode, errorMessage, email, credential);//
      // ...
    });*/
};

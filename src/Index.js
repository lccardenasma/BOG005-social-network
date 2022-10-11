// import { getAuth. onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { register } from "./Componentes/Register.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";

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

function registrar() {
  let dataEmail = email.value;
  let dataPassword = password.value;
  return alert("email=" + dataEmail + "password=" + dataPassword);
}

/*const auth = getAuth(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:9099");

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });*/

// const db = getFirestore(firebaseConfig);
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

//detectar estado de autenticación
// onAuthStateChanged(auth, user => {
//     if(user ≠ null) {
//         console.log('logged in!');
//     } else {
//         console.log('No user');
//     }
//     )
// })

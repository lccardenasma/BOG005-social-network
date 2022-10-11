// import { getAuth. onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSExOJ9sJ6ipBogtLDborFNjOfUwpFo0Q',
  authDomain: 'social-networks16.firebaseapp.com',
  projectId: 'social-networks16',
  storageBucket: 'social-networks16.appspot.com',
  messagingSenderId: '1036377589316',
  appId: '1:1036377589316:web:c795ce940f4221e3735e11',
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//console.log('configuración realizada: ', app);
firebase.initializeApp(firebaseConfig);
function continuar(){
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
  alert('email='+email+ 'password='+password);

//   firebase.auth().createUserWithEmailAndPassword(email, pass)
//   .catch(function(error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//   });

// const auth = getAuth(firebaseConfig);
// const db = getFirestore(firebaseConfig);
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

// detectar estado de autenticación
// onAuthStateChanged(auth, user => {
//     if(user ≠ null) {
//         console.log('logged in!');
//     } else {
//         console.log('No user');
//     }
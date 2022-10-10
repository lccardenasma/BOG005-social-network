import { initializeApp } from 'firebase/app';
import { getAuth. onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';


const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBSExOJ9sJ6ipBogtLDborFNjOfUwpFo0Q',
  authDomain: 'social-networks16.firebaseapp.com',
  projectId: 'social-networks16',
  storageBucket: 'social-networks16.appspot.com',
  messagingSenderId: '1036377589316',
  appId: '1:1036377589316:web:c795ce940f4221e3735e11',
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

//detectar estado de autenticación
onAuthStateChanged(auth, user => {
    if(user ≠ null) {
        console.log('logged in!');        
    } else {
        console.log('No user');
    }  
    )
})




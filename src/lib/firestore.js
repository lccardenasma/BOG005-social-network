import { getFirestore, addDoc, collection, getDocs, onSnapshot, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js';
console.log('getDocs: ', getDocs);
const db = getFirestore();

export const saveTask = (text) => {
  addDoc(collection(db, 'tasks'), { text });
};

export const getTask = () => {
  getDocs(collection(db, 'tasks'));
};

export const getAllTasks = (querySnapshot) => {
  onSnapshot(collection(db, 'tasks'), querySnapshot);
};

export const eliminarPost = (id) => {
  deleteDoc(doc(db, 'tasks', id));
};
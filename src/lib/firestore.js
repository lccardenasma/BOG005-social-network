import { getFirestore, addDoc, collection, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
console.log("getDocs: ", getDocs);
const db = getFirestore();

export const saveTask = (text, likes) => {
  addDoc(collection(db, "tasks"), { text, likes });
};

export const getTask = () => {
  getDocs(collection(db, "tasks"));
};

export const getAllTasks = (querySnapshot) => {
  onSnapshot(collection(db, "tasks"), querySnapshot);
};

export const eliminarPost = (id) => {
  deleteDoc(doc(db, "tasks", id));
};

export const getPost = (id) => getDoc(doc(db, "tasks", id));

export const updatePost = (id, newFields) => {
  console.log("id necesario", id);
  console.log("campo: ", newFields);
  updateDoc(doc(db, "tasks", id), newFields);
};

/**
 * cons addLike = (id, uid) => {
 * updateDoc(...
 * }
 */

import {arrayUnion,arrayRemove, getFirestore, addDoc, collection, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js';

// console.log('getDocs: ', getDocs);
const db = getFirestore();

export const saveTask = (text, likes) => {
  addDoc(collection(db, 'tasks'), { text, likes:[] });
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

export const getPost = (id) => getDoc(doc(db, 'tasks', id));

export const updatePost = (id, newFields) => {
  console.log('id necesario', id);
  console.log('campo: ', newFields);
  updateDoc(doc(db, 'tasks', id), newFields);
};

/**
 * cons addLike = (id, uid) => {
 * updateDoc(...
 * }
 */
//  export const addLike = (id, userId) => {
//   const darLike = async getPost(id);
//   const userLike = darLike.data().likes;
//   const likeCount = darLike.data().likesCounter;
//   if (userLike.includes(userId)) {
//     async actualizarComentario(postId, {
//       likes: arrayRemove(userId),
//       likesCounter: likeCount - 1,
//     });
//   } else {
//     async actualizarComentario(postId, {
//       likes: arrayUnion(userId),
//       likesCounter: likeCount + 1,
//     });
//   }};
export const updateLike = (id, userId) => {
  // console.log(doc, userId)
  updateDoc(doc(db, 'tasks', id), {likes: arrayUnion(userId)});
};
export const disLike = (id, userId) => {
  // console.log(doc, userId)
  updateDoc(doc(db, 'tasks', id), {likes: arrayRemove(userId)});
};

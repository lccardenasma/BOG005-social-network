import {
  saveTask, getTask, getAllTasks, eliminarPost, getPost, updatePost, updateLike, disLike,
} from '../lib/firestore.js';
import { salir, getCurrentUser } from '../lib/firebase.js';

export function showWall() {
  const wall = `
  <section class="containerWall">  
    <header id="headerWall">
      <h1 class = "inicio"> Inicio </h1>
      <section id= "ubicacionBotonCerrar">
        <button id="cerrar">Cerrar Sesión</button>
      </section>
      <form id="taskform" class= "task-form">
        <textarea type="text" id="postText" class="textPost" placeholder="¿Que quieres compartir?"></textarea>
        <button id="bottonPublicar"class="botonPublicar"> Publicar </button>
      </form>    
    </header>
    <section id="containerPosts"></section>
  </section>
  `;
  const nodeWall = document.createElement('div');
  nodeWall.innerHTML = wall;

  let editStatus = false;
  let id = '';
  const likes = [];
  const taskForm = nodeWall.querySelector('.task-form');

  // taskForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   const inputText = taskForm.postText;
  //   if (!editStatus) {
  //     taskForm["bottonPublicar"].innerText = "**Actualizar**";

  //     //llamar a fc editar
  //   } else {
  //     saveTask(inputText.value);
  //     taskForm["bottonPublicar"].innerText = "**Publicar";
  //   }

  //   taskForm.reset();
  // });

  const querySnapshot = getTask();

  getAllTasks((result) => {
    const postContainer = nodeWall.querySelector('#containerPosts');
    let postHtml = '';
    result.forEach((doc) => {
      const datos = doc.data();
      postHtml += `
      <div id= "textPost">
        <figure id = "imagenPerfil"> </figure>        
        <section id= "postCompleto">
          <p id="textoPost">${datos.text}</p>      
          <section id="buttons">
            <button class="botonFavorito" data-id="${doc.id}">${datos.likes.length}</button>
            <button class="botonEditar" data-id="${doc.id}"></button>
            <button class ="botonEliminar" data-id="${doc.id}"></button>
          </section>
        </section>
      </div>
      
      `;
      // console.log("ver posthtml: ", postHtml);
    });
    postContainer.innerHTML = postHtml;

    const botonesEliminar = document.querySelectorAll('.botonEliminar');
    botonesEliminar.forEach((boton) => {
      boton.addEventListener('click', ({ target: { dataset } }) => {
        eliminarPost(dataset.id);
      });
    });

    const botonesEditar = document.querySelectorAll('.botonEditar');
    botonesEditar.forEach((boton) => {
      boton.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id);
        const docData = doc.data();
        // console.log('jekljwljrlewjrklwjlrjwl', docData);
        taskForm.postText.value = docData.text;
        editStatus = true;
        id = doc.id;
        console.log('ver el id: ', id);
        taskForm.bottonPublicar.innerText = 'Actualizar';
      });
    });
    const botonLike = document.querySelectorAll('.botonFavorito');
    botonLike.forEach((boton) => {
      boton.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id);
        // const docData = doc.data();
        const userLike = doc.data().likes;
        console.log(userLike);
        const userId = getCurrentUser().uid;

        if (userLike.includes(userId)) {
          disLike(doc.id, userId);
        } else {
          updateLike(doc.id, userId);
        }
      });
    });
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = taskForm.postText.value;
    console.log('ver el status: ', editStatus);
    if (!editStatus) {
      saveTask(text, likes);
    } else {
      updatePost(id, { text });
      editStatus = false;
      id = '';
      taskForm.bottonPublicar.innerText = 'Publicar';
    }

    taskForm.reset();
  });

  getAllTasks(querySnapshot);

  const botonCerrar = nodeWall.querySelector('#cerrar');
  botonCerrar.addEventListener('click', salir);

  return nodeWall;
}

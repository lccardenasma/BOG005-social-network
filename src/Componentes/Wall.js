import { saveTask, getTask, getAllTasks } from '../lib/firestore.js';
import { salir } from '../lib/firebase.js';
import { eliminarPost } from '../lib/firestore.js';

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
        <button class="botonPublicar"> Publicar </button>
      </form>

    
    </header>
    <section id="containerPosts"></section>
  </section>
  `;
  const nodeWall = document.createElement('div');
  nodeWall.innerHTML = wall;

  const taskForm = nodeWall.querySelector('.task-form');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputText = taskForm.postText;

    saveTask(inputText.value);
    taskForm.reset();
  });

  const querySnapshot = getTask();

  getAllTasks((result) => {
    const postContainer = nodeWall.querySelector('#containerPosts');
    let postHtml = '';
    result.forEach((doc) => {
      const datos = doc.data();
      console.log(doc.id);

      postHtml += `
      <div id= "textPost">

        <section id="perfil">
          <figure id = "imagenPerfil"> </figure>
        </section>

      <p id="textoPost">${datos.text}</p>
      
      <section id="buttons">
        <button id="botonFavorito">Favorito</button>
        <button id="botonEditar">Editar</button>
        <button id="${doc.id}" class = "botonEliminar" >Eliminar</button>
      </section>

      </div>
      
      `;
      console.log('ver posthtml: ', postHtml);
      postContainer.innerHTML = postHtml;

      
    //   const btnEliminar = postContainer.querySelectorAll ("${doc.id}");
    //   btnEliminar.forEach((btn) =>
    // btn.addEventListener("click", async ({ target: { dataset } }) => {
    //   try {
    //     await deleteTask(dataset.id);
    //   } catch (error)
  
    });
  });

  getAllTasks(querySnapshot);

  const botonCerrar = nodeWall.querySelector('#cerrar');
  botonCerrar.addEventListener('click', salir);
  return nodeWall;

  

};

// Funcion eliminar post






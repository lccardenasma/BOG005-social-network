import { saveTask, getTask, getAllTasks } from "../lib/firestore.js";
import { salir } from "../lib/firebase.js";

export function showWall() {
  const wall = `
  <section class="containerWall">
  <header id="headerWall">
    <h1 class = "inicio"> Inicio </h1>
    <form id="taskform" class= "task-form">
    <textarea type="text" id="postText" class="textPost" placeholder="¿Que quieres compartir?"></textarea>
    <button class="botonPublicar"> Publicar </button>
    </form>
    <button id="cerrar">Cerrar Sesión</button>
    </header>
    <section id="containerPosts"></section>
  </section>
  `;
  const nodeWall = document.createElement("div");
  nodeWall.innerHTML = wall;

  const taskForm = nodeWall.querySelector(".task-form");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputText = taskForm["postText"];

    saveTask(inputText.value);
    taskForm.reset();
  });

  const querySnapshot = getTask();

  getAllTasks((result) => {
    const postContainer = nodeWall.querySelector("#containerPosts");
    let postHtml = "";
    result.forEach((doc) => {
      let datos = doc.data();
      console.log(doc.id);

      postHtml += `
      <div id= "textPost">
      <figure id = "imagenPerfil"> </figure>
      <p id="textoPost">${datos.text}</p>
      <section id="buttons">
      <button id="favorito">Favorito</button>
      <button id="editar">Editar</button>
      <button id="${doc.id}">Eliminar</button>
      </section>
      </div>
      
      `;
      console.log("ver posthtml: ", postHtml);
      postContainer.innerHTML = postHtml;
    });
  });
  getAllTasks(querySnapshot);

  const botonCerrar = nodeWall.querySelector("#cerrar");
  botonCerrar.addEventListener("click", salir);
  return nodeWall;
}

//Commit de prueba

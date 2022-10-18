import { saveTask, getTask, getAllTasks } from "../lib/firestore.js";

export function showWall() {
  const wall = `
  <section class="containerWall">
    <h1 class = "inicio"> Inicio </h1>
    <figure id = "imagenPerfil"> </figure>
    <form id="taskform" class= "task-form">
    <textarea type="text" id="postText" class="textPost" placeholder="¿Que quieres compartir?"></textarea>
    <button class="botonPublicar"> Publicar </button>
    </form>
    <section id="containerPosts"></section>
  </section>
  `;
  const nodeWall = document.createElement("div");
  nodeWall.innerHTML = wall;
  /* const creandoPost = nodeWall.querySelector(".textPost");
  const botonPublicar = nodeWall.querySelector(".botonPublicar");
  botonPublicar.addEventListener("click", () => {
    publicando(creandoPost.value);
  });*/

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

      postHtml += `
      <div id= "textPost">
      <p id="texto">${datos.text}</p>
      <button id="favorito">Favorito</button>
      <button id="editar">Editar</button>
      <button id="eliminar">Eliminar</button>
      </div>
      
      `;
      console.log("ver posthtml: ", postHtml);
      postContainer.innerHTML = postHtml;
    });
  });
  getAllTasks(querySnapshot);

  /*const showPosts = (datos) => {
    let postHtml = "";

    for (let i = 0; i < datos.length; i++) {
      postHtml += `
      <section id= "textPost">
      <p id="texto">${datos.data}</p>
      </section>
      <button id="favorito"></button>
      <button id="editar"></button>
      <button id="eliminar"></button>
      `;
    }
    const postContainer = nodeWall.querySelector("#containerPosts");
    postContainer.innerHTML = postHtml;
  };

  showPosts(querySnapshot.docs);*/

  // window.addEventListener("DOMContentLoaded", () => {});

  return nodeWall;
}

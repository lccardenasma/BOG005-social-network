import { saveTask, getTask } from "../lib/firestore.js";

export function showWall() {
  const wall = `
  <section class="containerWall">
    <h1 class = "inicio"> Inicio </h1>
    <figure id = "imagenPerfil"> </figure>
    <form id="taskform" class= "task-form">
    <textarea type="text" id="postText" class="textPost" placeholder="¿Que quieres compartir?"></textarea>
    <button class="botonPublicar"> Publicar </button>
    </form>
  </section>
  `;
  const nodeWall = document.createElement("div");
  nodeWall.innerHTML = wall;
  /* const creandoPost = nodeWall.querySelector(".textPost");
  const botonPublicar = nodeWall.querySelector(".botonPublicar");
  botonPublicar.addEventListener("click", () => {
    publicando(creandoPost.value);
  });*/

  window.addEventListener("DOMContentLoaded", async () => {
    const querySnapshot = await getTask();
    console.log(querySnapshot);
  });
  const taskForm = nodeWall.querySelector(".task-form");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");

    const inputText = taskForm["postText"];
    console.log(inputText.value);

    saveTask(inputText.value);
    taskForm.reset();
  });

  return nodeWall;
}

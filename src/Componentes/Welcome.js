import { onNavigate } from "../main.js";

export function showWelcome() {
  const welcome = ` <section class="containerWelcome">
  <div>
  <figure><img class="logo" src="./Componentes/logo.png" alt="Logo"/></figure>
  </div>
  <h2><img url="logo.png"></h2>
  <p class="frase">Una Comunidad para compartir contenido de libros y fragmentos de texto.</p>
  <button class="buttonLoginW" id="buttonLoginWC" >INICIAR SESION</button>
  <button class="buttonRegisterW" id="buttonRegisterWC">REGISTRARSE</button>
  <p class="o">----------------------------- o --------------------------</p>
  <button class="buttonGoogle>Inicio sesión con Google</button>
  </section>
  `;
  const nodeWelcome = document.createElement("div");
  nodeWelcome.innerHTML = welcome;

  const buttonLogin = nodeWelcome.querySelector("#buttonLoginWC");
  const buttonRegister = nodeWelcome.querySelector("#buttonRegisterWC");

  console.log(buttonLogin);

  console.log(buttonRegister);

  buttonLogin.addEventListener("click", () => {
    onNavigate("/login");
  });

  buttonRegister.addEventListener("click", () => {
    onNavigate("/register");
  });
  return nodeWelcome;
}

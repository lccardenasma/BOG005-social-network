import { onNavigate } from "../main.js";

export function showWelcome() {
  const welcome = ` <section class="containerWelcome">
  <section class = "encabezado">
    <figure><img src="./Componentes/logo.png" alt="Logo"/></figure>
    <p class="frase">Una Comunidad para compartir contenido de libros y fragmentos de texto.</p>
   </section>

  <section class = "botonesWelcome">
    <button class="buttonLoginW" id="buttonLoginWC" >INICIAR SESION</button>
    <br>
    <button class="buttonRegisterW" id="buttonRegisterWC">REGISTRARSE</button>
    <br>
    <p class="o"><span> o </span></p>
    <br>
    <button class="buttonGoogle">Inicio sesión con Google</button>

  </section>
  
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

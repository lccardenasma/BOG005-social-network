import { onNavigate } from "../main.js";

export const welcome = `
  <section class="containerWelcome">
  <h2><img url="logo.png"></h2>
  <p class="frase">Una Comunidad para compartir contenido de libros y fragmentos de texto.</p>
  <button class="buttonLoginW">INICIAR SESION</button>
  <button class="buttonRegisterW">REGISTRARSE</button>
  <p class="o">----------------------------- o --------------------------</p>
  <button class="buttonGoogle>Inicio sesión con Google</button>
  </section>
  `;

const buttonLogin = document.querySelector("buttonLoginW");
const buttonRegister = document.querySelector("buttonRegisterW");
/*buttonLogin.addEventListener("click", () => {
  onNavigate("/login");
});

buttonRegister.addEventListener("click", () => {
  onNavigate("/register");
});*/

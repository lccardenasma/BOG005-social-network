import { onNavigate } from "../main.js";
import { ingresar } from "../lib/firebase.js";

export function showLogin() {
  const login = `
<section class="containerLogin">
<input type="email" class="email" placeholder="Correo Electrónico"/>
<input type="password" class="password" placeholder="Contraseña"/>
<button class="botonLogin">Continuar</button>
</section>
`;
  const nodeLogin = document.createElement("div");
  nodeLogin.innerHTML = login;

  const inputEmail = nodeLogin.querySelector(".email");
  const inputPassword = nodeLogin.querySelector(".password");
  const buttonIngresar = nodeLogin.querySelector(".botonLogin");

  buttonIngresar.addEventListener("click", () => {
    ingresar(inputEmail.value, inputPassword.value);
  });
  buttonIngresar.addEventListener("click", () => {
    onNavigate("/wall");
  });
  return nodeLogin;
}

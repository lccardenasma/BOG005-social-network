import { onNavigate } from "../main.js";
import { ingresar } from "../index.js";

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
  return nodeLogin;
}
/*
/  buttonLogin.addEventListener("click", () => {
    // console.log(inputEmail.value);
    onNavigate("/wall");
  });
  buttonBack.addEventListener("click", () => {
    onNavigate("/");
  });/
};
*/

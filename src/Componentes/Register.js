import { onNavigate } from "../main.js";
import { registrar } from "../index.js";

export function showRegister() {
  const register = `
<section class="containerRegister">
<input type="email" class="email" placeholder="Correo Electrónico"/>
<input type="password" class="password" placeholder="Contraseña"/>
<button class="botonRegister">Registrarse</button>
</section>
`;
  const nodeRegister = document.createElement("div");
  nodeRegister.innerHTML = register;

  const inputEmail = nodeRegister.querySelector(".email");
  const inputPassword = nodeRegister.querySelector(".password");
  const botonR = nodeRegister.querySelector(".botonRegister");
  botonR.addEventListener("click", () => {
    registrar(inputEmail.value, inputPassword.value);
  });
  botonR.addEventListener("click", () => {
    onNavigate("/wall");
  });
  return nodeRegister;
}

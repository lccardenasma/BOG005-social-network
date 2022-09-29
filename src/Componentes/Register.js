import { onNavigate } from "../main.js";

export const register = () => {
  const div = document.createElement("div");
  const logo = document.createElement("h1");
  const parrafo = document.createElement("p");
  const name = document.createElement("input");
  const age = document.createElement("input");
  const email = document.createElement("input");
  const password = document.createElement("input");
  const buttonContinue = document.createElement("button");
  buttonContinue.classList.add("botonDePrueba");
  logo.textContent = "logo";
  parrafo.textContent = "Comparte tus publicaciones y postea en una comunidad de diversos gustos literarios";
  name.placeholder = "Nombre";
  age.placeholder = "Edad";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Crea una contraseña";
  buttonContinue.textContent = "Continuar";

  buttonContinue.addEventListener("click", () => {
    onNavigate("/wall");
  });
  div.append(logo, parrafo, name, age, email, password, buttonContinue);
  return div;
};

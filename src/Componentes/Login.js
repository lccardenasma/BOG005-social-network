import { onNavigate } from "../main.js";

export const login = () => {
  const div = document.createElement("div");
  const title = document.createElement("h2"); // logo
  const buttonLogin = document.createElement("button");
  const buttonBack = document.createElement("button");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  document.body.style.background = "#F3F3F3";
  buttonLogin.textContent = "Ingresar";
  buttonBack.textContent = "Atras";

  buttonLogin.addEventListener("click", () => {
    // console.log(inputEmail.value);
    onNavigate("/wall");
  });
  buttonBack.addEventListener("click", () => {
    onNavigate("/");
  });

  div.append(title, inputEmail, inputPass, buttonLogin, buttonBack);

  return div;
};

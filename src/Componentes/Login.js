import { onNavigate } from "../main.js";

export const login = () => {
  buttonLogin.addEventListener("click", () => {
    // console.log(inputEmail.value);
    onNavigate("/wall");
  });
  buttonBack.addEventListener("click", () => {
    onNavigate("/");
  });
};

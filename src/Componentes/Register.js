import { onNavigate } from "../main.js";

export const register = () => {
  buttonContinue.addEventListener("click", () => {
    onNavigate("/wall");
  });
};

//Función con Firebase

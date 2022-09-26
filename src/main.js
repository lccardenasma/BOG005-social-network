// eslint-disable-next-line import/no-unresolved
import { welcome } from "./Componentes/welcome.js";

const root = document.getElementById("root");

const routes = {
  "/": welcome,
};

root.appendChild(welcome());

import { welcome } from "./Componentes/Welcome.js";
import { login } from "./Componentes/login.js";
import { register } from "./Componentes/Register.js";
import { wall } from "./Componentes/Wall.js";

const routes = {
  "/": welcome,
  "/login": login,
  "/register": register,
  "/wall": wall,
};

const root = document.getElementById("root");
root.innerHTML = routes[window.location.pathname];
export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = routes[pathname];
};

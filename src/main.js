import { showWelcome } from "./Componentes/Welcome.js";
import { showLogin } from "./Componentes/login.js";
import { showRegister } from "./Componentes/Register.js";
import { showWall } from "./Componentes/Wall.js";
import { auth, onAuthStateChanged } from "./lib/firebase.js";

const root = document.getElementById("root");

const routes = {
  "/": showWelcome,
  "/login": showLogin,
  "/register": showRegister,
  "/wall": showWall,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  // root.append(component());
  root.appendChild(routes[window.location.pathname]());
};

root.appendChild(component());

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (!user) {
    onNavigate("/");
  } else {
    onNavigate("/wall");
  }
});

import { welcome } from './Componentes/Welcome.js';
import { login } from './Componentes/login.js';
import { register } from './Componentes/Register.js';
import { wall } from './Componentes/Wall.js';

const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
  '/wall': wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};
root.appendChild(component());

import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const frase = document.createElement('p');
  const o = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  buttonLogin.textContent = 'Iniciar Sesión';
  buttonRegister.textContent = 'Registrarse';
  buttonGoogle.textContent = 'Inicia sesión con Google';
  title.textContent = 'Logo';
  frase.textContent = 'Una Comunidad para compartir contenido de libros y fragmentos de texto .';
  o.textContent = 'o';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  div.append(title, frase, buttonLogin, buttonRegister, o, buttonGoogle);

  return div;
};

import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const frase = document.createElement('p');
  const o = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  // document.body.style.background = '#00008B';
  div.classList.add('divWelcome');
  title.classList.add('titleWelcome');
  frase.classList.add('frase');
  o.classList.add('o');
  buttonLogin.classList.add('buttonLoginW');
  buttonRegister.classList.add('buttonRegisterW');
  buttonGoogle.classList.add('buttonGoogle');

  buttonLogin.textContent = 'INICIAR SESIÓN';
  buttonRegister.textContent = 'REGISTRARSE';
  buttonGoogle.textContent = 'Inicia sesión con Google';
  title.textContent = 'Logo';
  frase.textContent = 'Una Comunidad para compartir contenido de libros y fragmentos de texto .';
  o.textContent = 'o';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  div.append(title, frase, buttonLogin, buttonRegister, o, buttonGoogle);

  return div;
};

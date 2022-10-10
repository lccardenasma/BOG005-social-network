import { onNavigate } from '../main.js';

export const register = () => {
  const div = document.createElement('div');
  const logo = document.createElement('h1');
  const parrafo = document.createElement('p');
  const name = document.createElement('input');
  const age = document.createElement('input');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const buttonContinue = document.createElement('button');
  document.body.style.background = '#00008B';
  div.classList.add('divRegister');
  buttonContinue.classList.add('botonContinuar');
  logo.classList.add('logoRegister');
  parrafo.classList.add('parrafo');
  name.classList.add('name');
  age.classList.add('age');
  email.classList.add('email');
  password.classList.add('password');

  logo.textContent = 'logo';
  parrafo.textContent = 'Crear una cuenta';
  name.placeholder = 'Nombre';
  age.placeholder = 'Edad';
  email.placeholder = 'Correo Electrónico';
  password.placeholder = 'Crea una contraseña';
  buttonContinue.textContent = 'Continuar';

  buttonContinue.addEventListener('click', () => {
    onNavigate('/wall');
  });
  div.append(logo, parrafo, name, age, email, password, buttonContinue);
  return div;
};

export const welcome = () => {
const div = document.createElement ('div');
const buttonLogin = document.createElement ('button');
const buttonRegister = document.createElement ('button');

buttonLogin.textContent ='Log in';
buttonRegister.textContent = 'Sign in';

div.append (buttonLogin, buttonRegister);
    
return div;
} ;
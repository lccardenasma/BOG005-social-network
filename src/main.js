import {welcome} from './Componentes/welcome.js';

const root = document.getElementById ('root');

const routes = {
'/': Welcome,
};

root.appendChild (welcome());
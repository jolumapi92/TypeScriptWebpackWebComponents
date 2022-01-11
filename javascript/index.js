import { CardCar } from "./carComponent.js";
alert("Joselito malito");
window.customElements.define("card-car", CardCar);
const body = document.querySelector('body');
let customElement = document.createElement('card-car');
body.appendChild(customElement);

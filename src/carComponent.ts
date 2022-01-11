import { Car } from "./car.js";
const template = document.createElement("template");
template.innerHTML = `
    <div>
        <h1>Jose Luis Matias Pineda</h1>
    </div>
`;

class CardCar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

export { CardCar };

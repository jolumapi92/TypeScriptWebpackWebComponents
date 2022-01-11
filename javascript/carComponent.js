const template = document.createElement("template");
template.innerHTML = `
    <div>
        <h1>Jose Luis Matias Pineda</h1>
    </div>
`;
class CardCar extends HTMLElement {
    constructor() {
        var _a;
        super();
        this.attachShadow({ mode: "open" });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
    }
}
export { CardCar };

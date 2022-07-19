class Display extends HTMLElement {
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "value") {
      this.updateView(newValue);
    }
  }
  static get observedAttributes() {
    return ["value"];
  }
  connectedCallback() {
    this.updateView("0");
  }
  updateView(value) {
    this.innerHTML = `<output>${value}</output>`;
  }
}

customElements.define("calc-display", Display);

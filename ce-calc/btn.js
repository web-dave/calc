class Btn extends HTMLElement {
  value = "";
  button = document.createElement("button");
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "value") {
      this.updateView(newValue);
    }
  }
  static get observedAttributes() {
    return ["value"];
  }
  connectedCallback() {
    this.appendChild(this.button);
    this.addEventListener("click", (e) => this.ping(e));
  }
  updateView(value) {
    this.value = value;
    this.button.innerHTML = value;
  }
  ping(e) {
    this.dispatchEvent(
      new CustomEvent("pong", {
        detail: this.value,
        bubbles: true,
      })
    );
  }
}

customElements.define("calc-btn", Btn);

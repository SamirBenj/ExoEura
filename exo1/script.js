class MonCustomElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const monname = this.getAttribute("name");
    console.log(monname);

    const name = `
    Bonjour ${monname ?? "votre message ?"}
    `;
    console.log("moncustomelelement");

    this.textContent = name;
  }
}

function getInput() {
  const messageInput = document.getElementById("name").value;

  const message = document.querySelector("welcome-message");
  message.setAttribute("name", messageInput);
  console.log(message);
  message.connectedCallback();
}

customElements.define("welcome-message", MonCustomElement);

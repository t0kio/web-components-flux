import { html, render } from "lit-html";

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  render() {
    return html` <div>hello world</div>`;
  }
}

customElements.define("hello-world", HelloWorld);

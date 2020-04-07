import { html, render } from "lit-html";

export class HomePage extends HTMLElement {
  constructor() {
    super();
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  static get is() {
    return "home-page";
  }

  render() {
    return html` <div>home page</div>`;
  }
}

// customElements.define(HomePage.is, HomePage);

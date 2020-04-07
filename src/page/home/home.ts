import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

export class HomePage extends HTMLElement {
  constructor() {
    super();
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  static get is() {
    return "home-page";
  }

  get styles() {
    return {
      title: {
        color: "pink",
      },
    };
  }

  render() {
    return html` <div style=${styleMap(this.styles.title)}>home page</div> `;
  }
}

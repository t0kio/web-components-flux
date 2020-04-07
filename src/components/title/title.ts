import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

export class Title extends HTMLElement {
  constructor() {
    super();
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  static get is() {
    return "title-tag";
  }

  get styles() {
    return {
      title: {
        color: "pink",
      },
    };
  }

  render() {
    return html`
      <div style=${styleMap(this.styles.title)}>title componets</div>
    `;
  }
}

customElements.define(Title.is, Title);

import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

export class Title extends HTMLElement {
  count: string;
  constructor() {
    super();
  }

  static get is() {
    return "title-tag";
  }

  connectedCallback() {
    this.count = this.getAttribute("data");
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  static get observedAttributes() {
    return ["data"];
  }

  get styles() {
    return {
      title: {
        color: "pink",
      },
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.count = newValue;
    render(this.render(), this.shadowRoot);
  }

  render() {
    return html`
      <div style=${styleMap(this.styles.title)}>
        title componets${this.count}
      </div>
    `;
  }
}

customElements.define(Title.is, Title);

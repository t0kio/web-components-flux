import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";
import { ConnectedTitle } from "./../../components/title/connectedTitle";
import { rootStore } from "./../../module";
import { countUp } from "./../../module/count";

export class HomePage extends HTMLElement {
  clickHandler: Function;
  constructor() {
    super();
    this.clickHandler = this._clickHandler.bind(this);
  }

  static get is() {
    return "home-page";
  }

  connectedCallback() {
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  get styles() {
    return {
      title: {
        color: "pink",
      },
    };
  }

  _clickHandler() {
    rootStore.dispatch(countUp());
    render(this.render(), this.shadowRoot);
  }

  render() {
    return html`
      <div style=${styleMap(this.styles.title)}>
        <title-tag
          data=${rootStore.getState().counter.count.toString()}
        ></title-tag>
        <button @click=${this.clickHandler}></button>
      </div>
    `;
  }

  rerender() {}
}

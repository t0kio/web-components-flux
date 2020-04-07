import { html, render } from "lit-html";
import { rootStore } from "../../module/";

import "./title";

export const ConnectedTitle = () => {
  return html`<title-tag
    data=${rootStore.getState().counter.count.toString()}
  ></title-tag>`;
};

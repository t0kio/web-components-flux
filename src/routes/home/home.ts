import { HomePage } from "../../page/";
export const home = {
  path: "/",
  action: () => {
    customElements.define(HomePage.is, HomePage);
    return "<home-page></home-page>";
  },
};
